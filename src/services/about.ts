import api from "./api";

export const getAbout = async () => {
  const response = await api.get("/about-me");
  return response.data;
}