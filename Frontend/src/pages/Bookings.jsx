import { useEffect, useState } from "react";
import { fetchBookings } from "../api/api";
import "./Bookings.css";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("Please log in to view your bookings.");
      setLoading(false);
      return;
    }

    let isActive = true;
    fetchBookings(userId)
      .then((response) => {
        if (!isActive) return;
        setBookings(response.data || []);
        setError("");
      })
      .catch(() => {
        if (!isActive) return;
        setError("Failed to load bookings.");
      })
      .finally(() => {
        if (isActive) setLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="bookings-page">
      <div className="bookings-header">
        <h1>My Bookings</h1>
        <p>Track your submitted tour requests and details.</p>
      </div>

      {loading ? (
        <div className="loading">Loading bookings...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : bookings.length === 0 ? (
        <div className="empty">No bookings yet.</div>
      ) : (
        <div className="bookings-grid">
          {bookings.map((booking) => (
            <article key={booking.id} className="booking-card">
              <div className="booking-card__header">
                <h3>{booking.planName || "Tour booking"}</h3>
                <span className="booking-pill">Requested</span>
              </div>
              <div className="booking-meta">
                <div>
                  <span>Start date</span>
                  <strong>{booking.startDate || "TBD"}</strong>
                </div>
                <div>
                  <span>Travelers</span>
                  <strong>{booking.travelers || "-"}</strong>
                </div>
                <div>
                  <span>Budget</span>
                  <strong>{booking.estimatedBudget || "Contact us"}</strong>
                </div>
              </div>
              {booking.requests ? (
                <p className="booking-notes">{booking.requests}</p>
              ) : null}
              {booking.createdAt ? (
                <p className="booking-date">Submitted: {booking.createdAt}</p>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
