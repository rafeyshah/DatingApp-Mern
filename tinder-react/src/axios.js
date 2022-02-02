import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://date-app-rafey.herokuapp.com/'
})

export default instance;