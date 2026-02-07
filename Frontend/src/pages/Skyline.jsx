import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Golden hour skyline",
    description: "Watch the city glow with soft sunsets and layered skylines.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Rooftop viewpoints",
    description: "Pair skyline views with cocktails, music, and night lights.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Waterfront silhouettes",
    description: "Glide along the waterfront and photograph reflections.",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Skyline() {
  return (
    <div className="explore-page">
      <section className="explore-hero explore-hero--skyline">
        <div>
          <p className="eyebrow">Skyline views</p>
          <h1>Chase the best city horizons.</h1>
          <p className="hero-sub">
            Curated skyline moments, rooftop decks, and twilight walks that make
            every trip feel cinematic.
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
