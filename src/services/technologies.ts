// src/services/technologies.ts
import api from "./api";

export const getTechnologies = async () => {
    const response = await api.get("/api/technologies");
    return response.data;
}

export const addTechnology = async (data: { name: string }) => {
    const response = await api.post("/api/technologies", data);
    return response.data;
}

export const deleteTechnology = async (id: string) => {
    const response = await api.delete(`/api/technologies/${id}`);
    return response.data;
}