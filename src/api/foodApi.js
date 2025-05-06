import { mockFoods } from "../data/mockFoods";

export const getFoodData = async () => {
  try {
    // Simulate an API call (replace with real API URL)
    const response = await fetch('/api/foodApi'); // replace with real endpoint 
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn("Using mock data due to API error:", error.message);
    return mockFoods;
  }
};