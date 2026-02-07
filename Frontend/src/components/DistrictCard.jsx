import React from "react";
import "./DistrictCard.css";

const DistrictCard = ({ district, onClick }) => {
  return (
    <div className="district-card" onClick={onClick}>
      <div className="district-card-header">
        <h3>{district.name}</h3>
        <span className="province-tag">{district.province}</span>
      </div>
      <p className="district-card-description">{district.description}</p>
      <div className="district-card-footer">
        <span className="places-count">
          📍 {district.touristPlaces.length} Tourist Places
        </span>
        <button className="explore-btn">Explore →</button>
      </div>
    </div>
  );
};

export default DistrictCard;
