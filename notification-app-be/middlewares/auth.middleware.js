const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Authorization token missing"
        });
    }

    next();
};

export default authMiddleware;