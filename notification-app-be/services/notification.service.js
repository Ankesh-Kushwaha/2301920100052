import api from "../config/axios.js";
import priorityService from "./priority.service.js";

class NotificationService {

    async getNotifications(req) {

        const { userId } = req.params;

        const response = await api.get(`/notifications/${userId}`);

        const notifications = response.data.notifications || response.data;

        return priorityService.getTopNotifications(notifications);
    }

}

export default new NotificationService();