import api from "./api";

export const getTechnologies = async () => {
    const response = await api.get("/technologies");
    return response.data;
}