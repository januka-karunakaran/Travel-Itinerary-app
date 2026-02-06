import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      if (response.data && response.data.id) {
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("userName", response.data.name);

        alert("Login Successful! Redirecting...");
        navigate("/home"); // THIS MOVES YOU TO THE NEXT PAGE
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.response?.data || "Login failed. Check your connection.");
    }
  };

  return (
    <div className="auth-card">
      <h2>TripGenie Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <div className="auth-links">
          <Link to="/signup">Create Account</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
}
