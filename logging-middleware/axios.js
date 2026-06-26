const axios = require("axios");

const axiosInstance = axios.create({
    baseURL: process.env.LOG_BASE_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

module.exports = axiosInstance;