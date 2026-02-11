const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api";

// Generic API call handler
async function apiCall(endpoint, method = "GET", data = null) {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // For cookies if needed
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData.message || `HTTP error! status: ${response.status}`,
      );
    }

    return responseData;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}

// Authentication API
export const authAPI = {
  // Signup
  signup: (userData) => apiCall("/auth/signup", "POST", userData),

  // Login
  login: (credentials) => apiCall("/auth/login", "POST", credentials),
};

// Trip/Itinerary API
export const tripAPI = {
  // Generate new trip itinerary
  generate: (tripData) => apiCall("/trips/generate", "POST", tripData),

  // Get user's trip history
  getUserTrips: (userId) => apiCall(`/trips/user/${userId}`),
};

export default { authAPI, tripAPI };
