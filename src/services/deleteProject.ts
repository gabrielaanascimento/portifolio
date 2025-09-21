// src/services/deleteProject.ts
import api from './api';

export async function deleteProject(id: string) {
  const response = await api.delete(`/api/projects/${id}`);
  return response.data;
}
