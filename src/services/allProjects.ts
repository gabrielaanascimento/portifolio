import api from "./api";

export const allProjects = async () => {
    const response = await api.get("/api/projects");
    return response.data;
}