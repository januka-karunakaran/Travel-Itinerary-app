import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../api/api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("auth-full");
    return () => document.body.classList.remove("auth-full");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const response = await signupUser(form);
      console.log("Signup response:", response);
      alert("Account Created! Please Login.");
      navigate("/");
    } catch (err) {
      console.error("Signup error:", err);
      console.error("Error response:", err.response);
      // For testing without backend, show a message
      if (err.code === "ERR_NETWORK") {
        setError(
          "Backend not connected. Please ensure the server is running on port 8080.",
        );
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.response?.data) {
        setError(
          typeof err.response.data === "string"
            ? err.response.data
            : "Signup failed. Please try again.",
        );
      } else {
        setError("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-shell auth-shell--travel">
      <div className="auth-card-split">
        <div className="auth-hero auth-hero--image">
          <div className="auth-hero-content">
            <div className="auth-hero-brand">TripGenie</div>
            <h2>Plan trips with total clarity</h2>
            <p>
              Build day-by-day itineraries, keep budgets in check, and unlock
              curated experiences in seconds.
            </p>
            <span className="auth-hero-caption">
              Collect moments, not just destinations.
            </span>
          </div>
        </div>

        <div className="auth-panel">
          <form onSubmit={handleSignup} className="auth-form">
            <div className="auth-form-header">
              <h1>Join TripGenie</h1>
              <p>Create your account</p>
            </div>

            {error && (
              <p
                style={{
                  color: "var(--danger)",
                  margin: "0 0 0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                {error}
              </p>
            )}

            <div className="input-group">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="name@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="primary-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

            <div className="auth-footer">
              <span>Already have an account?</span>
              <Link to="/" className="primary-link">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
