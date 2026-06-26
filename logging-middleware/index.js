const axios = require("./axios");
const getToken = require("./auth");

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

module.exports = Log;