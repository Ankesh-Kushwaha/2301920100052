import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import notificationRoutes from "./routes/notification.routes.js";

import loggerMiddleware from "./middleware/logger.middleware.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(loggerMiddleware);

app.get("/", (req, res) => {
    res.json({
        success: true,
        service: "Campus Notification Service"
    });
});

app.use("/api/notifications", notificationRoutes);

app.use(errorMiddleware);

export default app;