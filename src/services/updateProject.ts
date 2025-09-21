// src/services/updateProject.ts

import api from "./api";

export interface ProjectUpdateData {
  title?: string;
  description?: string;
  link?: string;
  image_url?: string;
  category?: string;
  technologies?: string[];
}

export async function updateProject(id: string, data: ProjectUpdateData) {
  try {
    const response = await api.put(`/api/projects/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update project');
  }
}
