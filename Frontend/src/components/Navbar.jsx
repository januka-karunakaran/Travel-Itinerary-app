import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to={isLoggedIn ? "/home" : "/"} style={styles.link}>
          TripGenie ✈️
        </Link>
      </div>
      <div style={styles.navLinks}>
        {isLoggedIn ? (
          <>
            <Link to="/home" style={styles.link}>
              Planner
            </Link>
            <Link to="/my-trips" style={styles.link}>
              History
            </Link>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" style={styles.link}>
              Login
            </Link>
            <Link to="/signup" style={styles.link}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "#2c3e50",
    color: "white",
  },
  logo: { fontSize: "1.5rem", fontWeight: "bold" },
  navLinks: { display: "flex", gap: "20px", alignItems: "center" },
  link: { color: "white", textDecoration: "none" },
  logoutBtn: {
    background: "#e74c3c",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};
