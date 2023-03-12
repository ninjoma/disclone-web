import axios from 'axios'
import store from '../stores/Store'
import appConfig from '../../appConfig.json'

export default axios.create({
    baseURL: appConfig.ApiRoute,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('userToken'),
    }
})