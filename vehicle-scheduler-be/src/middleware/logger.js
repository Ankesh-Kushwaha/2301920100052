import Log from "../logging-middleware/index.js";

const loggerMiddleware = async (req, res, next) => {
    try {
        await Log(
            "backend",
            "info",
            "middleware",
            `${req.method} ${req.originalUrl}`
        );
    } catch (err) {
        console.error(err.message);
    }

    next();
};

export default loggerMiddleware;