import axios from 'axios'

export const Api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    }
})

Api.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('userToken');
    return config;
} )