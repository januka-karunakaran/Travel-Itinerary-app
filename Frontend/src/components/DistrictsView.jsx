import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchDistricts } from "../api/api";
import DistrictCard from "./DistrictCard";
import TouristPlaceCard from "./TouristPlaceCard";
import "./DistrictsView.css";

const DistrictsView = () => {
  const [districtsData, setDistrictsData] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  const locationSelectedDistrict = useMemo(() => {
    const districtName = location.state?.districtName;
    if (!districtName || districtsData.length === 0) {
      return null;
    }

    return (
      districtsData.find(
        (district) =>
          district.name.toLowerCase() === districtName.toLowerCase(),
      ) || null
    );
  }, [location.state?.districtName, districtsData]);

  const activeDistrict = selectedDistrict || locationSelectedDistrict;

  const categories = [
    "All",
    "Beach",
    "Historical",
    "Religious",
    "Nature",
    "Wildlife",
    "Cultural",
  ];

  useEffect(() => {
    if (!userId) return;

    let isActive = true;
    fetchDistricts()
      .then((response) => {
        if (!isActive) return;
        setDistrictsData(response.data || []);
        setError("");
      })
      .catch(() => {
        if (!isActive) return;
        setError("Failed to load districts.");
      })
      .finally(() => {
        if (isActive) setLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, [userId]);

  if (!userId) {
    return <div className="error">Please log in to view districts.</div>;
  }

  const filteredDistricts = districtsData.filter(
    (district) =>
      district.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      district.province.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
  };

  const handleBackToDistricts = () => {
    setSelectedDistrict(null);
  };

  const getFilteredPlaces = () => {
    if (!activeDistrict) return [];
    if (filterCategory === "All") return activeDistrict.touristPlaces;
    return activeDistrict.touristPlaces.filter(
      (place) => place.category === filterCategory,
    );
  };

  return (
    <div className="districts-view">
      {loading ? (
        <div className="loading">Loading districts...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : !activeDistrict ? (
        <>
          <div className="districts-header">
            <h1>Explore Sri Lanka's 25 Districts</h1>
            <p>
              Discover the beauty and culture of Sri Lanka across all districts
            </p>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Search districts or provinces..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="districts-grid">
            {filteredDistricts.length === 0 ? (
              <div className="empty">No districts found.</div>
            ) : (
              filteredDistricts.map((district) => (
                <DistrictCard
                  key={district.id}
                  district={district}
                  onClick={() => handleDistrictClick(district)}
                />
              ))
            )}
          </div>
        </>
      ) : (
        <>
          <button className="back-button" onClick={handleBackToDistricts}>
            ← Back to Districts
          </button>

          <div className="district-detail">
            <div className="district-detail-header">
              <h1>{activeDistrict.name} District</h1>
              <p className="province-badge">{activeDistrict.province}</p>
            </div>

            <p className="district-description">
              {activeDistrict.description}
            </p>

            <div className="map-container">
              <iframe
                title={`Map of ${activeDistrict.name}`}
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://maps.google.com/maps?q=${activeDistrict.coordinates.lat},${activeDistrict.coordinates.lng}&z=10&output=embed`}
                allowFullScreen
              ></iframe>
            </div>

            <div className="category-filter">
              <h3>Filter by Category:</h3>
              <div className="category-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-btn ${filterCategory === category ? "active" : ""}`}
                    onClick={() => setFilterCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="tourist-places">
              <h2>Tourist Attractions ({getFilteredPlaces().length})</h2>
              <div className="places-grid">
                {getFilteredPlaces().map((place) => (
                  <TouristPlaceCard key={place.id} place={place} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DistrictsView;
