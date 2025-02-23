import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const cache = new Map(); // ✅ Simple Cache for API Calls

// 📌 Fetch Users with Query Parameters (Pagination & Filters)
export const fetchUsers = async (queryParams = "") => {
  if (cache.has(queryParams)) {
    console.log("Returning cached data for:", queryParams);
    return cache.get(queryParams);
  }

  try {
    const response = await axios.get(`${BASE_URL}/users${queryParams}`);
    cache.set(queryParams, response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return { users: [], totalUsers: 0, currentPage: 1, totalPages: 1 };
  }
};

// 📌 Fetch Engagement Metrics
export const fetchEngagement = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/engagement`);
    return response.data;
  } catch (error) {
    console.error("Error fetching engagement data:", error);
    return null;
  }
};

// 📌 Fetch AI Insights
export const fetchAIInsights = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/insights`);
    return response.data;
  } catch (error) {
    console.error("Error fetching AI insights:", error);
    return null;
  }
};
