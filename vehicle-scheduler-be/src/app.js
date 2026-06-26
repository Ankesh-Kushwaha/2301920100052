import express from 'express';
import cors from 'cors';
import scheduleRoutes from './routes/schedule.route.js';
import logger  from ("./middleware/logger.js");
import errorHandler from './middleware/errorHandler.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use(logger);

app.use("/api", scheduleRoutes);

app.use(errorHandler);

module.exports = app;