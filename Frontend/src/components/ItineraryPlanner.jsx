import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fallbackImage from "../assets/placeholder-tourism.svg";
import { fetchItineraryPlans } from "../api/api";
import "./ItineraryPlanner.css";

const ItineraryPlanner = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    "All",
    "Cultural & Historical",
    "Nature & Scenery",
    "Beach & Relaxation",
    "Wildlife & Adventure",
    "Complete Experience",
  ];

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("Please log in to view itineraries.");
      setLoading(false);
      return;
    }

    let isActive = true;
    fetchItineraryPlans()
      .then((response) => {
        if (!isActive) return;
        setPlans(response.data || []);
        setError("");
      })
      .catch(() => {
        if (!isActive) return;
        setError("Failed to load itineraries.");
      })
      .finally(() => {
        if (isActive) setLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const filteredPlans =
    filterCategory === "All"
      ? plans
      : plans.filter((plan) => plan.category === filterCategory);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBackToPlans = () => {
    setSelectedPlan(null);
  };

  const handleBookNow = () => {
    if (!selectedPlan) return;
    navigate("/book-tour", { state: { plan: selectedPlan } });
  };

  if (loading) {
    return <div className="loading">Loading itineraries...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (selectedPlan) {
    return (
      <div className="itinerary-detail">
        <button className="back-button" onClick={handleBackToPlans}>
          ← Back to Itinerary Plans
        </button>

        <div className="plan-hero">
          <img
            src={selectedPlan.coverImage}
            alt={selectedPlan.name}
            className="plan-hero-image"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(event) => {
              event.currentTarget.src = fallbackImage;
            }}
          />
          <div className="plan-hero-content">
            <h1>{selectedPlan.name}</h1>
            <p className="plan-subtitle">{selectedPlan.description}</p>
            <div className="plan-meta">
              <span className="meta-item">📅 {selectedPlan.duration}</span>
              <span className="meta-item">⭐ {selectedPlan.difficulty}</span>
              <span className="meta-item">🌤️ {selectedPlan.bestSeason}</span>
            </div>
          </div>
        </div>

        <div className="plan-content">
          <div className="plan-sidebar">
            <div className="cost-card">
              <h3>Estimated Cost</h3>
              <div className="cost-options">
                <div className="cost-option">
                  <span className="cost-label">Budget</span>
                  <span className="cost-value">
                    {selectedPlan.estimatedCost.budget}
                  </span>
                </div>
                <div className="cost-option">
                  <span className="cost-label">Mid-Range</span>
                  <span className="cost-value">
                    {selectedPlan.estimatedCost.midRange}
                  </span>
                </div>
                <div className="cost-option">
                  <span className="cost-label">Luxury</span>
                  <span className="cost-value">
                    {selectedPlan.estimatedCost.luxury}
                  </span>
                </div>
              </div>
            </div>

            <div className="included-card">
              <h3>✅ Included</h3>
              <ul>
                {selectedPlan.included.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="not-included-card">
              <h3>❌ Not Included</h3>
              <ul>
                {selectedPlan.notIncluded.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <button className="book-button" onClick={handleBookNow}>
              Book This Tour
            </button>
          </div>

          <div className="plan-main">
            <h2>Day-by-Day Itinerary</h2>
            {selectedPlan.itinerary.map((day) => (
              <div key={day.day} className="day-card">
                <div className="day-header">
                  <span className="day-number">Day {day.day}</span>
                  <h3>{day.title}</h3>
                </div>
                <p className="day-description">{day.description}</p>

                <div className="day-details">
                  <div className="detail-section">
                    <h4>📍 Places to Visit</h4>
                    <div className="places-list">
                      {day.places.map((place, index) => (
                        <span key={index} className="place-tag">
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-section">
                    <h4>🎯 Activities</h4>
                    <ul>
                      {day.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="day-info-grid">
                    <div className="info-box">
                      <span className="info-icon">🍽️</span>
                      <span className="info-text">{day.meals}</span>
                    </div>
                    <div className="info-box">
                      <span className="info-icon">🏨</span>
                      <span className="info-text">{day.accommodation}</span>
                    </div>
                    <div className="info-box">
                      <span className="info-icon">🚗</span>
                      <span className="info-text">{day.travelTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="itinerary-planner">
      <div className="planner-header">
        <h1>Pre-Planned Itineraries</h1>
        <p>
          Choose from our curated travel plans or customize your own adventure
        </p>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filterCategory === category ? "active" : ""}`}
              onClick={() => setFilterCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="plans-grid">
        {filteredPlans.length === 0 ? (
          <div className="empty">No itineraries found.</div>
        ) : (
          filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="plan-card"
              onClick={() => handlePlanClick(plan)}
            >
              <div className="plan-image">
                <img
                  src={plan.coverImage}
                  alt={plan.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(event) => {
                    event.currentTarget.src = fallbackImage;
                  }}
                />
                <span className="plan-duration">{plan.duration}</span>
              </div>
              <div className="plan-info">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="plan-badges">
                  <span className="badge">{plan.difficulty}</span>
                  <span className="badge">{plan.category}</span>
                </div>
                <div className="plan-footer">
                  <span className="price-from">
                    From {plan.estimatedCost.budget}
                  </span>
                  <button className="view-details-btn">View Details →</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItineraryPlanner;
