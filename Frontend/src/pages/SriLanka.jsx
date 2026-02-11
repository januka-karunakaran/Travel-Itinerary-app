import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDistricts } from "../api/api";
import fallbackImage from "../assets/placeholder-tourism.svg";

const buildMapsLink = (coordinates) => {
  if (!coordinates) {
    return "https://www.google.com/maps";
  }
  return `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
};

export default function SriLanka() {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("Please log in to view districts.");
      setLoading(false);
      return;
    }

    let isActive = true;
    fetchDistricts()
      .then((response) => {
        if (!isActive) return;
        setDistricts(response.data || []);
        setError("");
      })
      .catch(() => {
        if (!isActive) return;
        setError("Failed to load districts.");
      })
      .finally(() => {
        if (isActive) setLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="districts-page">
      <section className="districts-hero">
        <div>
          <p className="eyebrow">Sri Lanka districts</p>
          <h1>Discover 25 districts and their top places.</h1>
          <p className="hero-sub">
            Browse each district, open the map, and dive into the full list of
            tourist places with photos and Google links.
          </p>
          <div className="district-actions">
            <Link to="/home" className="primary-link">
              Back to planner
            </Link>
            <Link to="/plan" className="link-muted">
              View itinerary
            </Link>
            <Link to="/districts" className="link-muted">
              Districts view
            </Link>
            <Link to="/itineraries" className="link-muted">
              Itineraries
            </Link>
            <Link to="/guides" className="link-muted">
              Guides
            </Link>
          </div>
        </div>
      </section>

      <section className="districts-grid">
        {loading ? (
          <div className="loading">Loading districts...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : districts.length === 0 ? (
          <div className="empty">No districts found.</div>
        ) : (
          districts.map((district) => (
            <article key={district.id} className="district-card">
              <header className="district-header">
                <div>
                  <h3>{district.name}</h3>
                  <p className="district-province">{district.province}</p>
                </div>
                <a
                  className="district-map"
                  href={buildMapsLink(district.coordinates)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open map
                </a>
              </header>

              <p className="district-description">{district.description}</p>
              <div className="district-meta">
                <span>{district.touristPlaces.length} places</span>
              </div>

              <div className="district-places">
                {district.touristPlaces.map((place) => (
                  <div key={place.id} className="district-place">
                    <div className="district-place__image">
                      <img
                        src={place.images?.[0] || fallbackImage}
                        alt={place.name}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.src = fallbackImage;
                        }}
                      />
                    </div>
                    <div>
                      <div className="district-place__title">
                        <h4>{place.name}</h4>
                        <span className="district-place__tag">
                          {place.category}
                        </span>
                      </div>
                      <p>{place.description}</p>
                      <div className="district-place__links">
                        <a
                          href={
                            place.googleMapsLink ||
                            buildMapsLink(place.coordinates)
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          Google maps
                        </a>
                        <span>{place.bestTimeToVisit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
