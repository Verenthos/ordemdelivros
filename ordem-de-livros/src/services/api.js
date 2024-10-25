import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.amazon.com',
  // Adicione outros parâmetros de configuração, se necessário
});

export default api;