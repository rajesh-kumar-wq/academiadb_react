import React, { useState } from "react";
import AuthBrand from "../components/AuthBrand";

export default function SignupPage({ onNavigate }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg,  setMsg]  = useState({ type: "", text: "" });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setMsg({ type: "error", text: "All fields are required." }); return;
    }
    setMsg({ type: "success", text: "Account created! Please sign in." });
    setTimeout(() => onNavigate("login"), 1500);
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <AuthBrand />
        <h1 className="auth-heading">Create account</h1>
        <p className="auth-sub">Register to manage student records</p>
        {msg.text && <div className={msg.type === "error" ? "msg-error" : "msg-success"}>{msg.text}</div>}
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label className="field-label">Full name</label>
            <input className="field-input" type="text" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name" />
          </div>
          <div className="field-group">
            <label className="field-label">Email</label>
            <input className="field-input" type="email" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@institution.edu" />
          </div>
          <div className="field-group">
            <label className="field-label">Password</label>
            <input className="field-input" type="password" value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })} placeholder="••••••••" />
          </div>
          <button className="btn-primary" type="submit">Sign up</button>
        </form>
        <p className="auth-footer">
          Already have an account?{" "}
          <span className="auth-link" onClick={() => onNavigate("login")}>Sign in</span>
        </p>
      </div>
    </div>
  );
}
