import React, { useState, useEffect } from "react";
import { tripAPI } from "../services/api";

function TripHistory() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUserTrips();
  }, []);

  const loadUserTrips = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("Please log in to view your trips");
        return;
      }

      const userTrips = await tripAPI.getUserTrips(userId);
      setTrips(userTrips);
      setError("");
    } catch (err) {
      setError("Failed to load trips");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading your trips...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="trip-history">
      <h2>My Travel History</h2>
      {trips.length === 0 ? (
        <p>No trips yet. Start planning your adventure!</p>
      ) : (
        <div className="trips-grid">
          {trips.map((trip) => (
            <div key={trip.id} className="trip-card">
              <h3>{trip.destination}</h3>
              <p>
                <strong>Duration:</strong> {trip.days} days
              </p>
              <p>
                <strong>Budget:</strong> {trip.budget}
              </p>
              <div className="trip-plan">
                <pre>{trip.planText}</pre>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TripHistory;
