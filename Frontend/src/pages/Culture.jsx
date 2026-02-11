import { Link } from "react-router-dom";
import { culturalAttractions } from "../data/cultureData";
import fallbackImage from "../assets/placeholder-tourism.svg";

const buildMapsLink = (coordinates) => {
  if (!coordinates) {
    return "https://www.google.com/maps";
  }
  return `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
};

export default function Culture() {
  return (
    <div className="explore-page">
      <section className="explore-hero explore-hero--culture">
        <div>
          <p className="eyebrow">Culture map</p>
          <h1>Meet the soul of the destination.</h1>
          <p className="hero-sub">
            Curated cultural moments that blend local history, art, and
            traditions.
          </p>
          <div className="explore-actions">
            <Link to="/home" className="primary-link">
              Back to planner
            </Link>
            <Link to="/plan" className="link-muted">
              View itinerary
            </Link>
          </div>
        </div>
      </section>

      <section className="explore-grid">
        {culturalAttractions.map((item) => {
          const cardImage = item.images?.[0] || fallbackImage;
          const mapLink =
            item.googleMapsLink || buildMapsLink(item.coordinates);

          return (
            <article
              key={item.id}
              className="explore-card"
              style={{
                backgroundImage: `url("${cardImage}"), url("${fallbackImage}")`,
              }}
            >
              <div className="explore-card__overlay">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="explore-card__meta">
                  <span>{item.location}</span>
                  <span>{item.when}</span>
                </div>
                <div className="explore-card__actions">
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="maps-link"
                  >
                    Google maps
                  </a>
                  <a
                    href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(item.name + " Sri Lanka")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Photos
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
