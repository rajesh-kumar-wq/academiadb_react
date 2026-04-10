import React from "react";
import { LogoSVG } from "./icons/Icons";

export default function AuthBrand() {
  return (
    <div className="auth-brand">
      <div className="auth-logo"><LogoSVG /></div>
      <span className="auth-brand-name">AcademiaDB</span>
    </div>
  );
}
