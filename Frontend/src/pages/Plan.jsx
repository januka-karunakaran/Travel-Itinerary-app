import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Plan() {
  const { state } = useLocation();
  const itinerary = state?.itinerary;
  const destination = state?.destination || "";
  const days = state?.days ?? "";
  const budget = state?.budget || "";
  const isError =
    typeof itinerary === "string" && itinerary.startsWith("Error:");

  const photoTiles = useMemo(() => {
    const place = destination || "Destination";
    return [
      { title: `${place} skyline`, tone: "tone-sunrise", route: "/skyline" },
      { title: `${place} food`, tone: "tone-sand", route: "/food" },
      { title: `${place} culture`, tone: "tone-ocean", route: "/culture" },
    ];
  }, [destination]);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div>
          <p className="eyebrow">Trip itinerary</p>
          <h1>Your travel plan, ready to go.</h1>
          <p className="hero-sub">
            Review your plan, adjust the inputs, and regenerate anytime.
          </p>
        </div>
      </section>

      <section className="home-grid">
        <div className="plan-meta-card">
          <h3>Trip details</h3>
          <div className="plan-meta-grid">
            <div>
              <span className="plan-meta-label">Destination</span>
              <p className="plan-meta-value">{destination || "--"}</p>
            </div>
            <div>
              <span className="plan-meta-label">Days</span>
              <p className="plan-meta-value">{days || "--"}</p>
            </div>
            <div>
              <span className="plan-meta-label">Budget</span>
              <p className="plan-meta-value">{budget || "--"}</p>
            </div>
          </div>
          <div className="plan-actions">
            <Link to="/home" className="primary-link">
              Plan another trip
            </Link>
            <Link to="/my-trips" className="link-muted">
              View trip history
            </Link>
          </div>
        </div>

        <div className="home-output">
          <div className="photo-strip">
            {photoTiles.map((photo, index) => (
              <Link
                key={index}
                to={photo.route}
                className={`photo-tile ${photo.tone} photo-tile-link`}
              >
                <span>{photo.title}</span>
              </Link>
            ))}
          </div>

          <div className="plan-preview">
            <h3>Itinerary</h3>
            {!itinerary ? (
              <p>
                Generate a trip to see the full itinerary here. Start from the
                planner and come back when it is ready.
              </p>
            ) : isError ? (
              <div className="error-banner">{itinerary}</div>
            ) : (
              <p>{itinerary}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
