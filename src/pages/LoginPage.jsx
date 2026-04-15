import React, { useState } from "react";
import AuthBrand from "../components/AuthBrand";
import { BRAND_GREEN } from "../constants/data";

export default function LoginPage({ onLogin, onNavigate }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {

      const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // Save JWT token
      localStorage.setItem("token", data.access);

      // Pass user + token to App.js
      onLogin(data.admin, data.access);

    } catch (err) {
      setError("Server connection failed");
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">

        <AuthBrand />

        <h1 className="auth-heading">Welcome back</h1>
        <p className="auth-sub">Sign in to manage student records</p>

        {error && <div className="msg-error">{error}</div>}

        <form onSubmit={handleSubmit}>

          <div className="field-group">
            <label className="field-label">Email address</label>
            <input
              className="field-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@institution.edu"
            />
          </div>

          <div className="field-group">
            <label className="field-label">Password</label>
            <input
              className="field-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="field-row">
            <label className="remember-wrap">
              <input type="checkbox" style={{ accentColor: BRAND_GREEN }} />
              Remember me
            </label>

            <span
              className="forgot-link"
              onClick={() => onNavigate("forgot")}
            >
              Forgot password?
            </span>
          </div>

          <button className="btn-primary" type="submit">
            Sign in
          </button>

        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <span
            className="auth-link"
            onClick={() => onNavigate("signup")}
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}