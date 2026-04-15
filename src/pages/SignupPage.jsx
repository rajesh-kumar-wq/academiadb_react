import React, { useState } from "react";
import AuthBrand from "../components/AuthBrand";

export default function SignupPage({ onNavigate }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [msg, setMsg] = useState({
    type: "",
    text: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setMsg({ type: "error", text: "All fields are required." });
      return;
    }

    try {

      const res = await fetch("http://127.0.0.1:8000/api/auth/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg({ type: "error", text: data.error || "Signup failed." });
        return;
      }

      setMsg({
        type: "success",
        text: "Account created successfully! Redirecting to login..."
      });

      setTimeout(() => {
        onNavigate("login");
      }, 1500);

    } catch (error) {

      setMsg({
        type: "error",
        text: "Server connection failed."
      });

    }

  };


  return (
    <div className="auth-bg">

      <div className="auth-card">

        <AuthBrand />

        <h1 className="auth-heading">Create account</h1>
        <p className="auth-sub">Register to manage student records</p>

        {msg.text && (
          <div className={msg.type === "error" ? "msg-error" : "msg-success"}>
            {msg.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="field-group">
            <label className="field-label">Full name</label>
            <input
              className="field-input"
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Your Name"
            />
          </div>

          <div className="field-group">
            <label className="field-label">Email</label>
            <input
              className="field-input"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="you@institution.edu"
            />
          </div>

          <div className="field-group">
            <label className="field-label">Password</label>
            <input
              className="field-input"
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              placeholder="••••••••"
            />
          </div>

          <button className="btn-primary" type="submit">
            Sign up
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <span
            className="auth-link"
            onClick={() => onNavigate("login")}
          >
            Sign in
          </span>
        </p>

      </div>

    </div>
  );
}