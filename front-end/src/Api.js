import axios from 'axios';

const api = axios.create({
    baseURL: 'http://0.0.0.0:8000/api/projects/'
})

export default api;