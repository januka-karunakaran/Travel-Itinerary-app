import React, { useState } from "react";
import fallbackImage from "../assets/placeholder-tourism.svg";
import "./TouristPlaceCard.css";

const TouristPlaceCard = ({ place }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="tourist-place-card">
      <div className="place-image-container">
        <img
          src={place.images?.[0] || fallbackImage}
          alt={place.name}
          className="place-image"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
        <span className="category-badge">{place.category}</span>
      </div>

      <div className="place-content">
        <h3>{place.name}</h3>
        <p className="place-description">{place.description}</p>

        <div className="place-info">
          <div className="info-item">
            <span className="info-label">📅 Best Time:</span>
            <span>{place.bestTimeToVisit}</span>
          </div>
          <div className="info-item">
            <span className="info-label">⏱️ Duration:</span>
            <span>{place.duration}</span>
          </div>
          <div className="info-item">
            <span className="info-label">💰 Entry Fee:</span>
            <span>{place.entranceFee}</span>
          </div>
        </div>

        <button
          className="details-toggle"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div className="place-details">
            <div className="place-map">
              <iframe
                title={`Map of ${place.name}`}
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0, borderRadius: "8px" }}
                src={`https://maps.google.com/maps?q=${place.coordinates.lat},${place.coordinates.lng}&z=15&output=embed`}
                allowFullScreen
              ></iframe>
            </div>

            <div className="place-actions">
              <a
                href={place.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn maps-btn"
              >
                📍 Open in Google Maps
              </a>
              <a
                href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(place.name + " Sri Lanka")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn photos-btn"
              >
                📷 View Photos
              </a>
            </div>

            {(place.images?.length ?? 0) > 1 && (
              <div className="place-gallery">
                {place.images.slice(1).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${place.name} ${index + 2}`}
                    className="gallery-image"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TouristPlaceCard;
