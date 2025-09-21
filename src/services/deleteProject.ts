// src/services/deleteProject.ts
import api from './api';

export async function deleteProject(id: string) {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
}