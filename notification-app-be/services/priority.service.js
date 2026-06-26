import MinHeap from "../utils/heap.js";
import { calculatePriority } from "../utils/priority.js";

class PriorityService {

    getTopNotifications(notifications, limit = Number(process.env.TOP_N || 10)) {

        const heap = new MinHeap();

        for (const notification of notifications) {

            const priority = calculatePriority(notification);

            const node = {
                priority,
                notification
            };

            if (heap.size() < limit) {
                heap.insert(node);
            } else if (priority > heap.peek().priority) {
                heap.remove();
                heap.insert(node);
            }
        }

        return heap
            .toArray()
            .sort((a, b) => b.priority - a.priority)
            .map(item => ({
                ...item.notification,
                priority: item.priority
            }));
    }

}

export default new PriorityService();