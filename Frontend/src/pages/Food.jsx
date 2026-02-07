import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Street market bites",
    description: "Taste local specialties fresh from the market stalls.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Chef-led tasting",
    description:
      "Book a tasting menu that tells the city story course by course.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cafe culture",
    description: "Slow down with coffee rituals and sunset dessert stops.",
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80",
  },
];

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
