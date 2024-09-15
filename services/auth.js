// services/auth.js
import { API_URL } from "@/constants/constants";

export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "03518361-0822-4e6e-9a82-62782b15d9d2",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data; // This contains the response from the API (e.g., a success message or token)
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "03518361-0822-4e6e-9a82-62782b15d9d2",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data; // This contains the response from the API (e.g., a success message or token)
  } catch (error) {
    throw new Error(error.message);
  }
};
