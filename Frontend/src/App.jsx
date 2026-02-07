import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import MyTrips from "./pages/MyTrips";
import Plan from "./pages/Plan";
import Skyline from "./pages/Skyline";
import Food from "./pages/Food";
import Culture from "./pages/Culture";
import SriLanka from "./pages/SriLanka";
import Districts from "./pages/Districts";
import Itineraries from "./pages/Itineraries";
import Guides from "./pages/Guides";

function AppLayout() {
  const location = useLocation();
  const hideNavbar = ["/", "/signup", "/forgot-password"].includes(
    location.pathname,
  );

  return (
    <>
      {!hideNavbar && <Navbar />}

      <div className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Pages: Only accessible if userId is in localStorage */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-trips"
            element={
              <ProtectedRoute>
                <MyTrips />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plan"
            element={
              <ProtectedRoute>
                <Plan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/skyline"
            element={
              <ProtectedRoute>
                <Skyline />
              </ProtectedRoute>
            }
          />
          <Route
            path="/food"
            element={
              <ProtectedRoute>
                <Food />
              </ProtectedRoute>
            }
          />
          <Route
            path="/culture"
            element={
              <ProtectedRoute>
                <Culture />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sri-lanka"
            element={
              <ProtectedRoute>
                <SriLanka />
              </ProtectedRoute>
            }
          />
          <Route
            path="/districts"
            element={
              <ProtectedRoute>
                <Districts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/itineraries"
            element={
              <ProtectedRoute>
                <Itineraries />
              </ProtectedRoute>
            }
          />
          <Route
            path="/guides"
            element={
              <ProtectedRoute>
                <Guides />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
