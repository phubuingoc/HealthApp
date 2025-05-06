import { mockChartData } from "../data/mockChartDataTopPage";

export const getChartData = async () => {
  try {
    // Simulate an API call (replace with real API URL)
    const response = await fetch('/api/chart'); // replace with real endpoint
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn("Using mock data due to API error:", error.message);
    return mockChartData; // fallback
  }
};