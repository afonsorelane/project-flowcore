import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3003',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepta e injeta token se existir no localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});