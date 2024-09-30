// frontend/utils/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Match your backend server URL
});

export const register = (data: any) => api.post('/register', data); // Ensure endpoint matches
export const login = (data: any) => api.post('/login', data); 