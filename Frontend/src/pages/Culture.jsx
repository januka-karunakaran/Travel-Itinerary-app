import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Museums & galleries",
    description: "Explore exhibitions that define the city heritage.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Neighborhood rituals",
    description: "Stroll through historic districts and meet local artisans.",
    image:
      "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Live performances",
    description: "Catch music, dance, and theater under city lights.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
  },
];

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
        {highlights.map((item) => (
          <article
            key={item.title}
            className="explore-card"
            style={{ backgroundImage: `url("${item.image}")` }}
          >
            <div className="explore-card__overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
