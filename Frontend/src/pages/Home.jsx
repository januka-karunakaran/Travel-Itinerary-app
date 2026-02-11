import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { tripAPI } from "../service/api";
import { fetchDistricts } from "../api/api";

export default function Home() {
  const [query, setQuery] = useState({
    destination: "",
    days: "",
    budget: "",
  });
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [districtsData, setDistrictsData] = useState([]);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      return;
    }

    let isActive = true;
    fetchDistricts()
      .then((response) => {
        if (!isActive) return;
        setDistrictsData(response.data || []);
      })
      .catch(() => {
        if (!isActive) return;
        setDistrictsData([]);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("Please log in to generate an itinerary");
        navigate("/login");
        return;
      }

      const destination = query.destination.trim();
      if (!destination) {
        setError("Please enter a destination.");
        return;
      }

      const matchedDistrict = districtsData.find(
        (district) => district.name.toLowerCase() === destination.toLowerCase(),
      );

      if (matchedDistrict) {
        navigate("/districts", {
          state: {
            districtName: matchedDistrict.name,
          },
        });
        return;
      }

      const tripData = {
        userId,
        destination,
        days: parseInt(query.days, 10),
        budget: query.budget,
      };

      const response = await tripAPI.generate(tripData);
      const planText = response.planText || "";

      setItinerary(planText);
      navigate("/plan", {
        state: {
          itinerary: planText,
          destination: response.destination || destination,
          days: response.days ?? tripData.days,
          budget: response.budget || tripData.budget,
          tripId: response.id,
        },
      });
    } catch (err) {
      setError(
        err.message || "Failed to generate itinerary. Please try again.",
      );
    } finally {
      setLoading(false);
    }
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
        <form className="home-form" onSubmit={handleSubmit}>
          <div>
            <label>Destination</label>
            <input
              type="text"
              name="destination"
              placeholder="Enter a city or country"
              value={query.destination}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="home-row">
            <div>
              <label>Days</label>
              <input
                type="number"
                name="days"
                min="1"
                max="30"
                value={query.days}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Budget</label>
              <select
                name="budget"
                value={query.budget}
                onChange={handleInputChange}
                required
                className="planner-budget-select"
              >
                <option value="">Select Budget</option>
                <option value="Budget">Budget</option>
                <option value="Mid-range">Mid-range</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "AI is Planning..." : "Generate"}
          </button>
          {error && <div className="error-banner">{error}</div>}
        </form>

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
