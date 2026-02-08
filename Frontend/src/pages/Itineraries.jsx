import ItineraryPlanner from "../components/ItineraryPlanner";

export default function Itineraries() {
  return (
    <div className="itineraries-page">
      <section className="itineraries-hero">
        <div className="itineraries-hero__copy">
          <p className="eyebrow">Pre-planned tours</p>
          <h1>Pick a Sri Lanka itinerary that fits your travel style.</h1>
          <p className="hero-sub">
            Browse curated plans, compare trip costs, and open a day-by-day
            schedule with highlights and stays.
          </p>
          <div className="itineraries-hero__meta">
            <span className="meta-pill">Curated themes</span>
            <span className="meta-pill">Flexible durations</span>
            <span className="meta-pill">Local highlights</span>
          </div>
        </div>
        <div className="itineraries-hero__card">
          <h3>How it works</h3>
          <div className="itineraries-steps">
            <div className="itineraries-step">
              <span className="step-dot">1</span>
              <div>
                <h4>Filter by interest</h4>
                <p>
                  Pick culture, beaches, wildlife, or a complete experience.
                </p>
              </div>
            </div>
            <div className="itineraries-step">
              <span className="step-dot">2</span>
              <div>
                <h4>Compare plans</h4>
                <p>
                  See duration, difficulty, and estimated costs at a glance.
                </p>
              </div>
            </div>
            <div className="itineraries-step">
              <span className="step-dot">3</span>
              <div>
                <h4>Open the itinerary</h4>
                <p>Review the day-by-day schedule and trip inclusions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="itineraries-body">
        <ItineraryPlanner />
      </section>
    </div>
  );
}
