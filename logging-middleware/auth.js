import axios from 'axios';

const getToken = async () => {
    try {
        const { data } = await axios.post(
            process.env.LOG_AUTH_API,
            {
                email: process.env.EMAIL,
                password: process.env.PASSWORD
            }
        );

        return data.access_token;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export default getToken;