import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

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
    <div className="auth-shell">
      <div className="auth-card-split">
        <div className="auth-hero">
          <div className="auth-hero-logo">TripGenie</div>
          <h2>Hello, welcome!</h2>
          <p>
            Plan smarter trips with AI itineraries, curated experiences, and
            personalized budgets.
          </p>
        </div>

        <div className="auth-panel">
          <form onSubmit={handleLogin} className="auth-form">
            <h2>TripGenie Login</h2>
            <div className="input-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="name@mail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                required
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
              <span>Not a member yet?</span>
              <Link to="/signup" className="primary-link">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
