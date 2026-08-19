import React, { useEffect, useState } from "react";
import fallbackGuide from "../assets/placeholder-guide.svg";
import { fetchTourGuides } from "../api/api";
import "./TourGuides.css";

const TourGuides = () => {
  const [filterSpec, setFilterSpec] = useState("All");
  const [search, setSearch] = useState("");
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  const specializations = [
    "All",
    "Cultural Sites",
    "Wildlife Safaris",
    "Beach Tours",
    "Hill Country",
    "Northern Tours",
  ];

  useEffect(() => {
    if (!userId) return;

    let isActive = true;
    fetchTourGuides()
      .then((response) => {
        if (!isActive) return;
        setGuides(response.data || []);
        setError("");
      })
      .catch(() => {
        if (!isActive) return;
        setError("Failed to load tour guides.");
      })
      .finally(() => {
        if (isActive) setLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, [userId]);

  if (!userId) {
    return <div className="error">Please log in to view tour guides.</div>;
  }

  const normalizedSearch = search.trim().toLowerCase();
  const filteredGuides = guides.filter((guide) => {
    const specializations = guide.specialization || [];
    const districts = guide.districts || [];
    const specializationMatch =
      filterSpec === "All" ||
      specializations.some((spec) =>
        spec.toLowerCase().includes(filterSpec.toLowerCase()),
      );

    const searchMatch =
      !normalizedSearch ||
      guide.name?.toLowerCase().includes(normalizedSearch) ||
      districts.some((district) =>
        district.toLowerCase().includes(normalizedSearch),
      );

    return specializationMatch && searchMatch;
  });

  const availableCount = guides.filter(
    (guide) => guide.availability?.toLowerCase() === "available",
  ).length;

  return (
    <div className="tour-guides">
      <div className="guides-header">
        <p className="guides-kicker">Professional Guide Directory</p>
        <h1>Find A Licensed Guide For Your Journey</h1>
        <p>
          Connect with certified local experts for structured, reliable, and
          memorable travel experiences across Sri Lanka.
        </p>

        <div className="guides-summary">
          <div className="guides-summary__item">
            <strong>{guides.length}</strong>
            <span>Total Guides</span>
          </div>
          <div className="guides-summary__item">
            <strong>{availableCount}</strong>
            <span>Currently Available</span>
          </div>
          <div className="guides-summary__item">
            <strong>{Math.max(specializations.length - 1, 0)}</strong>
            <span>Specialties</span>
          </div>
        </div>

        <div className="guides-search">
          <input
            type="text"
            placeholder="Search by guide name or district"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search guides"
          />
        </div>

        <div className="specialization-filter">
          {specializations.map((spec) => (
            <button
              key={spec}
              className={`spec-btn ${filterSpec === spec ? "active" : ""}`}
              onClick={() => setFilterSpec(spec)}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading tour guides...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="guides-grid">
          {filteredGuides.length === 0 ? (
            <div className="empty">No guides found.</div>
          ) : (
            filteredGuides.map((guide) => (
              <div key={guide.id} className="guide-card">
                <div className="guide-header">
                  <img
                    src={guide.photo || fallbackGuide}
                    alt={guide.name}
                    className="guide-photo"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(event) => {
                      event.currentTarget.src = fallbackGuide;
                    }}
                  />
                  {guide.certified && (
                    <span className="certified-badge">✓ Certified</span>
                  )}
                </div>

                <div className="guide-info">
                  <h3>{guide.name}</h3>
                  <p className="guide-experience">
                    {guide.experience || "Experience not listed"}
                  </p>

                  <div className="guide-rating">
                    <span className="rating-stars">
                      Rating {guide.rating || "N/A"}
                    </span>
                    <span className="rating-reviews">
                      ({guide.reviewsCount || 0} reviews)
                    </span>
                  </div>

                  <div className="guide-languages">
                    <strong>Languages:</strong>
                    <div className="lang-tags">
                      {(guide.languages || []).map((lang, index) => (
                        <span key={index} className="lang-tag">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="guide-specializations">
                    <strong>Specializations:</strong>
                    <div className="spec-tags">
                      {(guide.specialization || []).map((spec, index) => (
                        <span key={index} className="spec-tag">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="guide-districts">
                    <strong>Coverage:</strong>{" "}
                    {(guide.districts || []).join(", ")}
                  </div>

                  <p className="guide-description">{guide.description}</p>

                  <div className="guide-footer">
                    <div className="guide-price">
                      <span className="price-label">Price:</span>
                      <span className="price-value">
                        {guide.pricePerDay}/day
                      </span>
                    </div>
                    <span
                      className={`availability ${guide.availability === "Available" ? "available" : "booked"}`}
                    >
                      {guide.availability}
                    </span>
                  </div>

                  <div className="guide-actions">
                    <a
                      href={`tel:${guide.contact?.phone || ""}`}
                      className="contact-btn phone-btn"
                    >
                      Call
                    </a>
                    <a
                      href={`https://wa.me/${(guide.contact?.whatsapp || "").replace(/\+/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-btn whatsapp-btn"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${guide.contact?.email || ""}`}
                      className="contact-btn email-btn"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TourGuides;
