import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBooking } from "../api/api";
import "./BookTour.css";

export default function BookTour() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const plan = state?.plan;
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [requests, setRequests] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!plan) {
    return (
      <div className="booking-page">
        <div className="booking-card">
          <h1>No tour selected</h1>
          <p>Please go back and choose a tour to book.</p>
          <button
            type="button"
            className="primary-btn"
            onClick={() => navigate("/itineraries")}
          >
            Back to itineraries
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async () => {
    setStatus({ type: "", message: "" });
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setStatus({ type: "error", message: "Please log in to book a tour." });
      return;
    }

    if (!travelDate) {
      setStatus({ type: "error", message: "Please select a start date." });
      return;
    }

    setIsSubmitting(true);
    try {
      await createBooking({
        userId,
        planId: String(plan.id || ""),
        planName: plan.name,
        startDate: travelDate,
        travelers,
        requests,
        estimatedBudget: plan.estimatedCost?.midRange || "Contact us",
      });
      setStatus({
        type: "success",
        message: "Booking request submitted. We'll contact you soon.",
      });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Booking failed. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-grid">
        <section className="booking-summary">
          <div className="booking-hero">
            <img src={plan.coverImage} alt={plan.name} loading="lazy" />
            <div className="booking-hero__text">
              <p className="eyebrow">Booking summary</p>
              <h1>{plan.name}</h1>
              <p>{plan.description}</p>
            </div>
          </div>

          <div className="booking-meta">
            <div>
              <span className="meta-label">Duration</span>
              <p>{plan.duration}</p>
            </div>
            <div>
              <span className="meta-label">Difficulty</span>
              <p>{plan.difficulty}</p>
            </div>
            <div>
              <span className="meta-label">Best season</span>
              <p>{plan.bestSeason}</p>
            </div>
          </div>

          <div className="booking-inclusions">
            <div>
              <h3>Included</h3>
              <ul>
                {plan.included.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Not included</h3>
              <ul>
                {plan.notIncluded.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <aside className="booking-form">
          <div className="booking-card">
            <h2>Reserve your tour</h2>
            <p>Tell us your preferred dates and group details.</p>

            <label htmlFor="travelDate">Preferred start date</label>
            <input
              id="travelDate"
              type="date"
              value={travelDate}
              onChange={(event) => setTravelDate(event.target.value)}
            />

            <label htmlFor="travelers">Travelers</label>
            <select
              id="travelers"
              value={travelers}
              onChange={(event) => setTravelers(event.target.value)}
            >
              <option value="1">1 traveler</option>
              <option value="2">2 travelers</option>
              <option value="3">3 travelers</option>
              <option value="4">4 travelers</option>
              <option value="5+">5+ travelers</option>
            </select>

            <label htmlFor="notes">Special requests</label>
            <textarea
              id="notes"
              rows="4"
              placeholder="Dietary needs, room preferences, accessibility..."
              value={requests}
              onChange={(event) => setRequests(event.target.value)}
            />

            <div className="booking-price">
              <span>Estimated budget</span>
              <strong>{plan.estimatedCost?.midRange || "Contact us"}</strong>
            </div>

            {status.message ? (
              <div
                className={
                  status.type === "success" ? "success-banner" : "error-banner"
                }
              >
                {status.message}
              </div>
            ) : null}

            <button
              type="button"
              className="primary-btn"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit booking request"}
            </button>
            <button
              type="button"
              className="secondary-btn"
              onClick={() => navigate("/itineraries")}
            >
              Back to itineraries
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
