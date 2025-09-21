import api from "./api";

export const allProjects = async () => {
    const response = await api.get("/projects");
    return response.data;
}