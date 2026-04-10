import React from "react";

export const LogoSVG = () => (
  <svg viewBox="0 0 20 20" fill="none">
    <path d="M10 2L3 6v4c0 4 3.1 7.7 7 8.9C13.9 17.7 17 14 17 10V6L10 2z" fill="white" fillOpacity="0.9" />
    <path d="M7 10l2 2 4-4" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DashIcon = () => (
  <svg className="menu-icon" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" fillOpacity=".7" />
    <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" fillOpacity=".7" />
    <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" fillOpacity=".7" />
    <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" fillOpacity=".7" />
  </svg>
);

export const StudentsIcon = () => (
  <svg className="menu-icon" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5" r="3" fill="currentColor" fillOpacity=".7" />
    <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CoursesIcon = () => (
  <svg className="menu-icon" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const SettingsIcon = () => (
  <svg className="menu-icon" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.93 2.93l1.41 1.41M11.66 11.66l1.41 1.41M13.07 2.93l-1.41 1.41M4.34 11.66l-1.41 1.41"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

export const LogoutIcon = () => (
  <svg style={{ width: 16, height: 16 }} viewBox="0 0 16 16" fill="none">
    <path d="M6 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3M10 11l3-3-3-3M13 8H6"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
