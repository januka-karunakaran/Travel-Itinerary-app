import { useEffect, useMemo, useState } from "react";
import { fetchUserTrips, generateTrip } from "../api/api";
import { Link } from "react-router-dom";

export default function MyTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [viewMode, setViewMode] = useState("cards");
  const [filters, setFilters] = useState({
    search: "",
    budget: "All",
    minDays: 1,
    maxDays: 30,
  });
  const [query, setQuery] = useState({
    destination: "",
    days: 3,
    budget: "Medium",
  });
  const [generating, setGenerating] = useState(false);
  const [planResult, setPlanResult] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("Missing user session. Please log in again.");
      return;
    }

    setLoading(true);
    fetchUserTrips(userId)
      .then((res) => setTrips(res.data || []))
      .catch(() => setError("Unable to load your trips right now."))
      .finally(() => setLoading(false));
  }, []);

  const handleGenerate = async (overrideQuery) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("Missing user session. Please log in again.");
      return;
    }

    const nextQuery = overrideQuery || query;

    if (!nextQuery.destination.trim()) {
      setError("Please enter a destination.");
      return;
    }

    setError("");
    setGenerating(true);
    try {
      const res = await generateTrip({ ...nextQuery, userId });
      const trip = res.data;
      setPlanResult(trip);

      setTrips((prev) => {
        if (!trip || !trip.id) {
          return prev;
        }
        const exists = prev.some((item) => item.id === trip.id);
        return exists ? prev : [trip, ...prev];
      });
    } catch (err) {
      setError(
        "Error: The AI Service is currently unavailable. Please try again later.",
      );
    } finally {
      setGenerating(false);
    }
  };

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchesSearch = trip.destination
        ?.toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesBudget =
        filters.budget === "All" || trip.budget === filters.budget;
      const matchesDays =
        trip.days >= Number(filters.minDays) &&
        trip.days <= Number(filters.maxDays);
      return matchesSearch && matchesBudget && matchesDays;
    });
  }, [trips, filters]);

  const photoTiles = useMemo(() => {
    const destination =
      planResult?.destination || query.destination || "Destination";
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
    ];
  }, [planResult, query.destination]);

  const quickPicks = [
    { destination: "Kandy", days: 3, budget: "Medium" },
    { destination: "Galle", days: 2, budget: "Low" },
    { destination: "Ella", days: 4, budget: "High" },
  ];

  return (
    <div className="history-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Trips dashboard</p>
          <h2>Your trips, ready to revisit</h2>
        </div>
        <div className="view-toggle">
          <button
            type="button"
            className={viewMode === "cards" ? "active" : ""}
            onClick={() => setViewMode("cards")}
          >
            Cards
          </button>
          <button
            type="button"
            className={viewMode === "timeline" ? "active" : ""}
            onClick={() => setViewMode("timeline")}
          >
            Timeline
          </button>
        </div>
      </div>

      <section className="trip-generator">
        <div className="generator-form">
          <div>
            <label>Destination</label>
            <input
              type="text"
              placeholder="Enter a place"
              value={query.destination}
              onChange={(e) =>
                setQuery({ ...query, destination: e.target.value })
              }
            />
          </div>
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
          <button type="button" onClick={handleGenerate} disabled={generating}>
            {generating ? "Generating..." : "Generate plan"}
          </button>
        </div>

        <div className="generator-output">
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
            <h3>
              {planResult
                ? `Plan for ${planResult.destination}`
                : "Plan preview"}
            </h3>
            <p>
              {planResult?.planText
                ? planResult.planText
                : "Enter a destination to generate your plan and see highlights here."}
            </p>
          </div>
        </div>
      </section>

      <section className="quick-picks">
        <div>
          <p className="eyebrow">Next AI generate</p>
          <h3>Try a ready-made prompt</h3>
        </div>
        <div className="quick-pick-grid">
          {quickPicks.map((pick) => (
            <button
              key={pick.destination}
              type="button"
              className="quick-pick"
              onClick={() => {
                setQuery(pick);
                handleGenerate(pick);
              }}
            >
              <span>{pick.destination}</span>
              <small>
                {pick.days} days · {pick.budget}
              </small>
            </button>
          ))}
        </div>
      </section>

      <section className="trip-filters">
        <input
          type="text"
          placeholder="Search destination"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <select
          value={filters.budget}
          onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
        >
          <option value="All">All budgets</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <div className="range-group">
          <input
            type="number"
            min="1"
            max="30"
            value={filters.minDays}
            onChange={(e) =>
              setFilters({ ...filters, minDays: e.target.value })
            }
          />
          <span>to</span>
          <input
            type="number"
            min="1"
            max="30"
            value={filters.maxDays}
            onChange={(e) =>
              setFilters({ ...filters, maxDays: e.target.value })
            }
          />
          <span>days</span>
        </div>
      </section>

      {error && <div className="error-banner">{error}</div>}

      {loading ? (
        <div className="empty-state">Loading your trips...</div>
      ) : filteredTrips.length === 0 ? (
        <div className="empty-state">
          No trips yet. Generate a plan to get started.
        </div>
      ) : viewMode === "cards" ? (
        <div className="trip-grid">
          {filteredTrips.map((trip) => (
            <article
              key={trip.id || `${trip.destination}-${trip.days}`}
              className="trip-card"
            >
              <div className="card-header">
                <div>
                  <p className="eyebrow">{trip.budget}</p>
                  <h3>{trip.destination}</h3>
                </div>
                <span className="chip">{trip.days} days</span>
              </div>
              <div className="card-photos">
                {photoTiles.map((photo, index) => (
                  <div key={index} className={`photo-mini ${photo.tone}`} />
                ))}
              </div>
              <p className="card-plan">
                {trip.planText
                  ? trip.planText.slice(0, 160) + "..."
                  : "Plan pending..."}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="trip-timeline">
          {filteredTrips.map((trip, index) => (
            <div
              key={trip.id || `${trip.destination}-${index}`}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="card-header">
                  <div>
                    <p className="eyebrow">{trip.budget}</p>
                    <h3>{trip.destination}</h3>
                  </div>
                  <span className="chip">{trip.days} days</span>
                </div>
                <p className="card-plan">
                  {trip.planText
                    ? trip.planText.slice(0, 180) + "..."
                    : "Plan pending..."}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
