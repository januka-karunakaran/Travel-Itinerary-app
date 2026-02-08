import { Link } from "react-router-dom";
import { foodExperiences } from "../data/foodData";
import fallbackImage from "../assets/placeholder-tourism.svg";

export default function Food() {
  return (
    <div className="explore-page">
      <section className="explore-hero explore-hero--food">
        <div>
          <p className="eyebrow">Food trails</p>
          <h1>Follow the flavors of the city.</h1>
          <p className="hero-sub">
            From bustling markets to intimate tastings, these stops celebrate
            local flavor and seasonal menus.
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
        {foodExperiences.map((item) => {
          const cardImage = item.images?.[0] || fallbackImage;
          const firstSpot = item.whereToTry?.find((spot) => spot.googleLink);
          const mapLink =
            firstSpot?.googleLink ||
            `https://www.google.com/maps?q=${encodeURIComponent(item.name)}`;

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
                  <span>{item.region}</span>
                  <span>{item.bestTime}</span>
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
