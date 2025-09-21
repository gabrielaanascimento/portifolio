import api from "./api";

export const categoryProjects = async (categoryProjects: string) => {
    const response = await api.get("/projects");
    const filterCategoty = response.data.filter((item: { category: string; }) => item.category === categoryProjects);
    return filterCategoty;
}