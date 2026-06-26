import axios from "axios";

const api = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
    }
});

export default api;