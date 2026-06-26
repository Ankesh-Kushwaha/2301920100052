import notificationService from "../services/notification.service.js";

export const getNotifications = async (req, res, next) => {

    try {

        const data = await notificationService.getNotifications(req);

        return res.status(200).json({
            success: true,
            count: data.length,
            notifications: data
        });

    } catch (error) {
        next(error);
    }

};