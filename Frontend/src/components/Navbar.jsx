import { Link, NavLink, useNavigate } from "react-router-dom";

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
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              Planner
            </NavLink>
            <NavLink
              to="/my-trips"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              History
            </NavLink>
            <NavLink
              to="/skyline"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              Skyline
            </NavLink>
            <NavLink
              to="/food"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              Food
            </NavLink>
            <NavLink
              to="/culture"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              Culture
            </NavLink>
            <NavLink
              to="/districts"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              Districts
            </NavLink>
            <NavLink
              to="/itineraries"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              Itineraries
            </NavLink>
            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              Bookings
            </NavLink>
            <NavLink
              to="/guides"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              Guides
            </NavLink>
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `app-navbar__link${isActive ? " app-navbar__link--active" : ""}`
              }
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
