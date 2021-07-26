import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://covid19-api-philippines.herokuapp.com',
});

export default instance;