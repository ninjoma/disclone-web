import axios from 'axios'
import appConfig from '../../appConfig.json'

export const Api = axios.create({
    baseURL: appConfig.ApiRoute,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    }
})

Api.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('userToken');
    return config;
} )