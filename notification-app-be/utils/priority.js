import { PRIORITY } from "../config/constants.js";

export function calculatePriority(notification) {

    let score = 0;

    score += PRIORITY[notification.type] || 0;

    if (notification.isRead === false)
        score += 2;

    if (notification.isFavorite)
        score += 1;

    if (notification.createdAt) {
        const age =
            (Date.now() - new Date(notification.createdAt).getTime()) /
            (1000 * 60 * 60);

        if (age <= 24)
            score += 2;
    }

    return score;
}