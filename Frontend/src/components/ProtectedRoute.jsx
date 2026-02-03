import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("userId");

  if (!isAuthenticated) {
    // If not logged in, redirect to login page
    return <Navigate to="/" replace />;
  }

  return children;
}
