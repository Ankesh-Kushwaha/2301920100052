import express from 'express';
const router = express.Router();

import { generateSchedule } from '../controller/scheduler.controller.js';

router.get("/schedule",generateSchedule);

export default router;