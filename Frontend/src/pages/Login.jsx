import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("auth-full");
    return () => document.body.classList.remove("auth-full");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        },
      );

      // Check if response contains the user ID from MongoDB
      const userId = response.data?.userId || response.data?.id;
      if (userId) {
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", response.data?.name || "");
        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("rememberMe");
        }

        alert("Login Successful! Redirecting...");
        navigate("/home"); // THIS MOVES YOU TO THE NEXT PAGE
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.response?.data || "Login failed. Check your connection.");
    }
  };

  return (
    <div className="auth-shell auth-shell--travel">
      <div className="auth-card-split">
        <div className="auth-hero auth-hero--image">
          <div className="auth-hero-content">
            <div className="auth-hero-brand">TripGenie</div>
            <h2>Travel that feels effortless</h2>
            <p>
              Curated routes, smart budgets, and local insights that make every
              journey feel personal.
            </p>
            <span className="auth-hero-caption">
              Travel is the only purchase that enriches you in ways beyond
              material wealth.
            </span>
          </div>
        </div>

        <div className="auth-panel">
          <form onSubmit={handleLogin} className="auth-form">
            <div className="auth-form-header">
              <h1>Welcome</h1>
              <p>Login with email</p>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="name@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="auth-row">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="link-muted">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="primary-btn">
              Login
            </button>

            <div className="auth-footer">
              <span>Do not have an account?</span>
              <Link to="/signup" className="primary-link">
                Register now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
