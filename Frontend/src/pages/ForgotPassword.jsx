import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "../api/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    document.body.classList.add("auth-full");
    return () => document.body.classList.remove("auth-full");
  }, []);

  const handleReset = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await resetPassword({ email });
      setSuccess(
        response.data?.message || "Reset instructions sent successfully.",
      );
      setEmail("");
    } catch (apiError) {
      const message =
        apiError.response?.data?.message ||
        "Unable to process password reset right now.";
      setError(message);
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
            <h2>Recover your account securely</h2>
            <p>
              Enter your account email and we will send secure instructions to
              reset your password.
            </p>
            <span className="auth-hero-caption">
              Keep your travel plans protected and accessible.
            </span>
          </div>
        </div>

        <div className="auth-panel">
          <form onSubmit={handleReset} className="auth-form">
            <div className="auth-form-header">
              <h1>Forgot Password</h1>
              <p>We will send reset instructions to your email.</p>
            </div>

            {error && <div className="error-banner">{error}</div>}
            {success && <div className="success-banner">{success}</div>}

            <div className="input-group">
              <label htmlFor="reset-email">Email</label>
              <input
                id="reset-email"
                type="email"
                value={email}
                placeholder="name@email.com"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <button type="submit" className="primary-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Instructions"}
            </button>

            <div className="auth-footer">
              <span>Remembered your password?</span>
              <Link to="/" className="primary-link">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
