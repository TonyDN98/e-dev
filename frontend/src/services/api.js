// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Funcțiile existente
export const register = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const login = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
export const fetchThreads = () => axios.get(`${API_URL}/threads`);
export const createThread = (threadData) => axios.post(`${API_URL}/threads`, threadData);

// Adăugăm funcția fetchThread pentru a obține detaliile unei discuții
export const fetchThread = (threadId) => axios.get(`${API_URL}/threads/${threadId}`);
