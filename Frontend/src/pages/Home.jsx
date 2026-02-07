import { useMemo, useState } from "react";
import { generateTrip } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState({
    destination: "",
    days: 3,
    budget: "Medium",
  });
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePlan = async () => {
    setLoading(true);
    setError("");
    const userId = localStorage.getItem("userId");
    if (!query.destination.trim()) {
      setError("Please enter a destination.");
      setLoading(false);
      return;
    }

    try {
      const res = await generateTrip({ ...query, userId });
      const planText = res.data.planText;
      setItinerary(planText);
      navigate("/plan", {
        state: {
          itinerary: planText,
          destination: query.destination,
          days: query.days,
          budget: query.budget,
        },
      });
    } catch (err) {
      setError("Error: The AI Service is currently unavailable.");
    }
    setLoading(false);
  };

  const photoTiles = useMemo(() => {
    const destination = query.destination || "Destination";
    return [
      {
        title: `${destination} skyline`,
        tone: "tone-sunrise",
        route: "/skyline",
      },
      { title: `${destination} food`, tone: "tone-sand", route: "/food" },
      {
        title: `${destination} culture`,
        tone: "tone-ocean",
        route: "/culture",
      },
      {
        title: "Sri Lanka districts",
        tone: "tone-jungle",
        route: "/sri-lanka",
      },
    ];
  }, [query.destination]);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div>
          <p className="eyebrow">AI Trip Planner</p>
          <h1>Plan a trip that feels handcrafted.</h1>
          <p className="hero-sub">
            Tell us where you want to go and how long you have. We will craft a
            day-by-day itinerary in seconds.
          </p>
        </div>
      </section>

      <section className="home-grid">
        <div className="home-form">
          <div>
            <label>Destination</label>
            <input
              type="text"
              placeholder="Enter a city or country"
              value={query.destination}
              onChange={(e) =>
                setQuery({ ...query, destination: e.target.value })
              }
            />
          </div>
          <div className="home-row">
            <div>
              <label>Days</label>
              <input
                type="number"
                min="1"
                max="30"
                value={query.days}
                onChange={(e) =>
                  setQuery({ ...query, days: Number(e.target.value) })
                }
              />
            </div>
            <div>
              <label>Budget</label>
              <select
                value={query.budget}
                onChange={(e) => setQuery({ ...query, budget: e.target.value })}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <button type="button" onClick={handlePlan} disabled={loading}>
            {loading ? "AI is Planning..." : "Generate"}
          </button>
          {error && <div className="error-banner">{error}</div>}
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
            <h3>Your plan preview</h3>
            <p>
              {itinerary
                ? itinerary
                : "Generate an itinerary to see a detailed plan here."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
