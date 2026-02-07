import React, { useState } from "react";
import fallbackGuide from "../assets/placeholder-guide.svg";
import { tourGuides } from "../data/srilankaData";
import "./TourGuides.css";

const TourGuides = () => {
  const [filterSpec, setFilterSpec] = useState("All");

  const specializations = [
    "All",
    "Cultural Sites",
    "Wildlife Safaris",
    "Beach Tours",
    "Hill Country",
    "Northern Tours",
  ];

  const filteredGuides =
    filterSpec === "All"
      ? tourGuides
      : tourGuides.filter((guide) =>
          guide.specialization.some((spec) => spec.includes(filterSpec)),
        );

  return (
    <div className="tour-guides">
      <div className="guides-header">
        <h1>Find Your Perfect Tour Guide</h1>
        <p>
          Connect with experienced, certified local guides for an authentic Sri
          Lankan experience
        </p>

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

      <div className="guides-grid">
        {filteredGuides.map((guide) => (
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
                {guide.experience} of experience
              </p>

              <div className="guide-rating">
                <span className="rating-stars">⭐ {guide.rating}</span>
                <span className="rating-reviews">
                  ({guide.reviewsCount} reviews)
                </span>
              </div>

              <div className="guide-languages">
                <strong>Languages:</strong>
                <div className="lang-tags">
                  {guide.languages.map((lang, index) => (
                    <span key={index} className="lang-tag">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="guide-specializations">
                <strong>Specializations:</strong>
                <div className="spec-tags">
                  {guide.specialization.map((spec, index) => (
                    <span key={index} className="spec-tag">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="guide-districts">
                <strong>Coverage:</strong> {guide.districts.join(", ")}
              </div>

              <p className="guide-description">{guide.description}</p>

              <div className="guide-footer">
                <div className="guide-price">
                  <span className="price-label">Price:</span>
                  <span className="price-value">{guide.pricePerDay}/day</span>
                </div>
                <span
                  className={`availability ${guide.availability === "Available" ? "available" : "booked"}`}
                >
                  {guide.availability}
                </span>
              </div>

              <div className="guide-actions">
                <a
                  href={`tel:${guide.contact.phone}`}
                  className="contact-btn phone-btn"
                >
                  📞 Call
                </a>
                <a
                  href={`https://wa.me/${guide.contact.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn whatsapp-btn"
                >
                  💬 WhatsApp
                </a>
                <a
                  href={`mailto:${guide.contact.email}`}
                  className="contact-btn email-btn"
                >
                  ✉️ Email
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGuides;
