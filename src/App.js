import React, { useState } from "react";
import styles from "./styles/global";
import { initialStudents } from "./constants/data";
import LoginPage    from "./pages/LoginPage";
import SignupPage   from "./pages/SignupPage";
import ForgotPage   from "./pages/ForgotPage";
import Dashboard    from "./pages/Dashboard";
import StudentsPage from "./pages/StudentsPage";

export default function App() {
  const [page,     setPage]     = useState("login");
  const [user,     setUser]     = useState(null);
  const [students, setStudents] = useState(initialStudents);

  const handleLogin  = email => { setUser(email); setPage("dashboard"); };
  const handleLogout = ()    => { setUser(null);  setPage("login"); };

  return (
    <div className="acad-root">
      <style>{styles}</style>
      {page === "login"     && <LoginPage    onLogin={handleLogin} onNavigate={setPage} />}
      {page === "signup"    && <SignupPage   onNavigate={setPage} />}
      {page === "forgot"    && <ForgotPage   onNavigate={setPage} />}
      {page === "dashboard" && <Dashboard    students={students} setStudents={setStudents} onNavigate={setPage} onLogout={handleLogout} />}
      {page === "students"  && <StudentsPage students={students} setStudents={setStudents} onNavigate={setPage} onLogout={handleLogout} />}
    </div>
  );
}
