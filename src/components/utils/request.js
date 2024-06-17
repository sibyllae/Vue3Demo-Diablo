import axios from 'axios';

const req = axios.create({
    baseURL: 'https://zhong1016.github.io'
    // timeout: timeout
    // headers: headers
})

export default req