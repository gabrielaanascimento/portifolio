// src/services/about.ts
import api from "./api";

export const getAbout = async () => {
  const response = await api.get("/api/about-me");
  return response.data;
}

export const updateAbout = async (data: any) => {
    const response = await api.put("/api/about-me", data);
    return response.data;
}