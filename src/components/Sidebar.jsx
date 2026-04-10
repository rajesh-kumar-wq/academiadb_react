import React from "react";
import { LogoSVG, DashIcon, StudentsIcon, CoursesIcon, SettingsIcon, LogoutIcon } from "./icons/Icons";

export default function Sidebar({ page, onNavigate, onLogout }) {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo"><LogoSVG /></div>
        <span className="sidebar-brand-name">AcademiaDB</span>
      </div>
      <ul className="menu">
        <li className={`menu-item${page === "dashboard" ? " active" : ""}`} onClick={() => onNavigate("dashboard")}>
          <DashIcon /> Dashboard
        </li>
        <li className={`menu-item${page === "students" ? " active" : ""}`} onClick={() => onNavigate("students")}>
          <StudentsIcon /> Students
        </li>
        <li className="menu-item"><CoursesIcon /> Courses</li>
        <li className="menu-item"><SettingsIcon /> Settings</li>
      </ul>
      <button className="logout-btn" onClick={onLogout}>
        <LogoutIcon /> Logout
      </button>
    </div>
  );
}
