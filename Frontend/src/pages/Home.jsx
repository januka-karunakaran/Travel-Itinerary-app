import { useMemo, useState } from "react";
import { generateTrip } from "../api/api";

export default function Home() {
  const [query, setQuery] = useState({
    destination: "",
    days: 3,
    budget: "Medium",
  });
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      setItinerary(res.data.planText);
    } catch (err) {
      setError("Error: The AI Service is currently unavailable.");
    }
    setLoading(false);
  };

  const photoTiles = useMemo(() => {
    const destination = query.destination || "Destination";
    return [
      { title: `${destination} skyline`, tone: "tone-sunrise" },
      { title: `${destination} food`, tone: "tone-sand" },
      { title: `${destination} culture`, tone: "tone-ocean" },
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
              <div key={index} className={`photo-tile ${photo.tone}`}>
                <span>{photo.title}</span>
              </div>
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
