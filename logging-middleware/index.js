import axios from './axios';
import getToken from './auth.js'
import dotenv from 'dotenv';
dotenv.config();

const Log = async (stack, level, pkg, message) => {
    try {
        const token = await getToken();

        const { data } = await axios.post(
            process.env.LOG_API,
            {
                stack,
                level,
                package: pkg,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return data;
    } catch (error) {
        console.log(error);
    }
};

export default Log;