import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <nav className="app-navbar">
      <div className="app-navbar__logo">
        <Link to={isLoggedIn ? "/home" : "/"} className="app-navbar__link">
          TripGenie ✈️
        </Link>
      </div>
      <div className="app-navbar__links">
        {isLoggedIn ? (
          <>
            <Link to="/home" className="app-navbar__link">
              Planner
            </Link>
            <Link to="/my-trips" className="app-navbar__link">
              History
            </Link>
            <Link to="/skyline" className="app-navbar__link">
              Skyline
            </Link>
            <Link to="/food" className="app-navbar__link">
              Food
            </Link>
            <Link to="/culture" className="app-navbar__link">
              Culture
            </Link>
            <Link to="/districts" className="app-navbar__link">
              Districts
            </Link>
            <Link to="/itineraries" className="app-navbar__link">
              Itineraries
            </Link>
            <Link to="/guides" className="app-navbar__link">
              Guides
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="app-navbar__logout"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="app-navbar__link">
              Login
            </Link>
            <Link to="/signup" className="app-navbar__link">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
