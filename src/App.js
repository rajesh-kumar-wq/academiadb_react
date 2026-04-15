import React, { useState, useEffect } from "react";

import styles from "./styles/global";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPage from "./pages/ForgotPage";
import Dashboard from "./pages/Dashboard";
import StudentsPage from "./pages/StudentsPage";

export default function App() {

  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);
  const [students, setStudents] = useState([]);

  const token = localStorage.getItem("token");


  // ───────────────── FETCH STUDENTS FROM DJANGO ───────────────── //

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/students/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();

      if (Array.isArray(data)) {
        setStudents(data);
      }

    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };


  useEffect(() => {
    if (token) {
      fetchStudents();
    }
  }, [token]);


  // ───────────────── LOGIN / LOGOUT ───────────────── //

  const handleLogin = (userData, accessToken) => {

    localStorage.setItem("token", accessToken);

    setUser(userData);
    setPage("dashboard");

    fetchStudents();
  };

  const handleLogout = () => {

    localStorage.removeItem("token");

    setUser(null);
    setPage("login");
  };


  return (
    <div className="acad-root">

      <style>{styles}</style>

      {page === "login" && (
        <LoginPage
          onLogin={handleLogin}
          onNavigate={setPage}
        />
      )}

      {page === "signup" && (
        <SignupPage onNavigate={setPage} />
      )}

      {page === "forgot" && (
        <ForgotPage onNavigate={setPage} />
      )}

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