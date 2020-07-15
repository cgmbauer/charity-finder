import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.globalgiving.org/api/',
});

export default api;
