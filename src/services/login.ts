import axios from 'axios';
import api from './api';

interface LoginResponse {
  message: string;
  user: {
    id: string;
    username: string;
  };
}

interface LoginData {
  username: string;
  password: string;
}

export async function login(data: LoginData): Promise<LoginResponse> {
  try {
    const response = await api.post('/api/login', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Erro ao fazer login');
    } else {
      throw new Error('Erro na requisição de login');
    }
  }
}