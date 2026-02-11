import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/api" });

export const loginUser = (data) => API.post("/auth/login", data);
export const signupUser = (data) => API.post("/auth/signup", data);
export const resetPassword = (data) => API.post("/auth/forgot-password", data);
export const generateTrip = (data) => API.post("/trips/generate", data);
export const fetchUserTrips = (userId) => API.get(`/trips/user/${userId}`);
export const fetchDistricts = () => API.get("/content/districts");
export const fetchItineraryPlans = () => API.get("/content/itineraries");
export const fetchTourGuides = () => API.get("/content/guides");
export const createBooking = (data) => API.post("/bookings", data);
export const fetchBookings = (userId) => API.get(`/bookings/user/${userId}`);
