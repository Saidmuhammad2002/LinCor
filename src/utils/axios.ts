import axios from 'axios';

axios.defaults.baseURL = 'http://104.248.30.36:3001/api';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  const authorization = token ? token : '';
  config.headers.authorization = `Bearer ${authorization}`;
  return config;
});

export default axios;
