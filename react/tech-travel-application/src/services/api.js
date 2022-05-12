import axios from 'axios';

const api = axios.create({
  baseURL: 'https://627d3bacbf2deb7174ea0350.mockapi.io/',
});

export default api;
