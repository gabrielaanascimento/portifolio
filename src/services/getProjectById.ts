// src/services/getProjectById.ts
import api from './api';

export async function getProjectById(id: string) {
  const response = await api.get(`/projects/${id}`);
  return response.data;
}