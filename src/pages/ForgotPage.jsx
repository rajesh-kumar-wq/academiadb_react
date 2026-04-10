import React, { useState } from "react";
import AuthBrand from "../components/AuthBrand";

export default function ForgotPage({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [msg,   setMsg]   = useState({ type: "", text: "" });

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) { setMsg({ type: "error", text: "Please enter your email." }); return; }
    setMsg({ type: "success", text: "A temporary password has been sent to your email." });
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <AuthBrand />
        <h1 className="auth-heading">Forgot password</h1>
        <p className="auth-sub">Enter your registered email to reset your password</p>
        {msg.text && <div className={msg.type === "error" ? "msg-error" : "msg-success"}>{msg.text}</div>}
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label className="field-label">Email</label>
            <input className="field-input" type="email" value={email}
              onChange={e => setEmail(e.target.value)} placeholder="you@institution.edu" />
          </div>
          <button className="btn-primary" type="submit">Send temporary password</button>
        </form>
        <p className="auth-footer">
          Remembered your password?{" "}
          <span className="auth-link" onClick={() => onNavigate("login")}>Sign in</span>
        </p>
      </div>
    </div>
  );
}
