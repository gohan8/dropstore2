// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api-node.onrender.com', // Altere para o endereço do seu backend
});

export default api;