// import React, { useState, useEffect } from "react";

// import styles from "./styles/global";

// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import ForgotPage from "./pages/ForgotPage";
// import Dashboard from "./pages/Dashboard";
// import StudentsPage from "./pages/StudentsPage";

// export default function App() {

//   const [page, setPage] = useState("login");
//   const [user, setUser] = useState(null);
//   const [students, setStudents] = useState([]);

//   const token = localStorage.getItem("token");


//   // ───────────────── FETCH STUDENTS FROM DJANGO ───────────────── //

//  const fetchStudents = async () => {
//   try {
//     const token = localStorage.getItem("access");

//     const res = await fetch("http://127.0.0.1:8000/api/students/", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await res.json();

//     setStudents(data.students || []);

//   } catch (error) {
//     console.error("Failed to fetch students:", error);
//   }
// };


//   useEffect(() => {
//     if (token) {
//       fetchStudents();
//     }
//   }, [token]);


//   // ───────────────── LOGIN / LOGOUT ───────────────── //

//   const handleLogin = (userData, accessToken) => {

//     localStorage.setItem("token", accessToken);

//     setUser(userData);
//     setPage("dashboard");

//     fetchStudents();
//   };

//   const handleLogout = () => {

//     localStorage.removeItem("token");

//     setUser(null);
//     setPage("login");
//   };


//   return (
//     <div className="acad-root">

//       <style>{styles}</style>

//       {page === "login" && (
//         <LoginPage
//           onLogin={handleLogin}
//           onNavigate={setPage}
//         />
//       )}

//       {page === "signup" && (
//         <SignupPage onNavigate={setPage} />
//       )}

//       {page === "forgot" && (
//         <ForgotPage onNavigate={setPage} />
//       )}

//       {page === "dashboard" && (
//         <Dashboard
//           students={students}
//           setStudents={setStudents}
//           onNavigate={setPage}
//           onLogout={handleLogout}
//         />
//       )}

//       {page === "students" && (
//         <StudentsPage
//           students={students}
//           setStudents={setStudents}
//           onNavigate={setPage}
//           onLogout={handleLogout}
//         />
//       )}

//     </div>
//   );
// }




import React, { useState, useEffect } from "react";

import styles from "./styles/global";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPage from "./pages/ForgotPage";
import Dashboard from "./pages/Dashboard";
import StudentsPage from "./pages/StudentsPage";

const API = "http://127.0.0.1:8000/api";

export default function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);
  const [students, setStudents] = useState([]);

  // 🔐 ALWAYS use SAME KEY as Dashboard
  const getToken = () => localStorage.getItem("access");

  // ───────────────── AUTH FETCH (SINGLE SOURCE) ───────────────── //
  const authFetch = async (url, options = {}) => {
    const token = getToken();

    return fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });
  };

  // ───────────────── FETCH STUDENTS ───────────────── //
  const fetchStudents = async () => {
    try {
      const res = await authFetch(`${API}/students/`);
      const data = await res.json();

      // backend returns: { students: [...] }
      setStudents(data.students || []);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  // ───────────────── LOAD ON LOGIN ───────────────── //
  useEffect(() => {
    const token = getToken();

    if (token && page === "dashboard") {
      fetchStudents();
    }
  }, [page]);

  // ───────────────── LOGIN ───────────────── //
  const handleLogin = (userData, accessToken) => {
    // 🔐 store ONLY ONE KEY (IMPORTANT FIX)
    localStorage.setItem("access", accessToken);

    setUser(userData);
    setPage("dashboard");

    // immediate fetch after login
    setTimeout(() => {
      fetchStudents();
    }, 100);
  };

  // ───────────────── LOGOUT ───────────────── //
  const handleLogout = () => {
    localStorage.removeItem("access");

    setUser(null);
    setStudents([]);
    setPage("login");
  };

  // ───────────────── UI ───────────────── //
  return (
    <div className="acad-root">
      <style>{styles}</style>

      {page === "login" && (
        <LoginPage onLogin={handleLogin} onNavigate={setPage} />
      )}

      {page === "signup" && <SignupPage onNavigate={setPage} />}

      {page === "forgot" && <ForgotPage onNavigate={setPage} />}

      {page === "dashboard" && (
        <Dashboard
          students={students}
          setStudents={setStudents}
          onNavigate={setPage}
          onLogout={handleLogout}
        />
      )}

      {page === "students" && (
        <StudentsPage
          students={students}
          setStudents={setStudents}
          onNavigate={setPage}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}