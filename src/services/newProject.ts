import api from "./api";

export interface ProjectData {
  title: string;
  description: string;
  link: string;
  image_url: string;
  category: string;
  technologies?: string[];
}

export const createProject = async (projectData: ProjectData) => {
  try {
    const { data } = await api.post("/api/projects", projectData);
    return data;
  } catch (error) {
    console.error("Failed to create project:", error);
    throw error;
  }
};
