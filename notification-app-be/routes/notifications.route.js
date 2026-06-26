import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import {
    getNotifications
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get(
    "/:userId",
    authMiddleware,
    getNotifications
);

export default router;