import depotService from "../services/depot.service.js";
import vehicleService from "../services/vehicle.service.js";
import scheduler from "../utils/scheduler.js";

const generateSchedule = async (req, res, next) => {
    try {
        const depots = await depotService.getDepots(req);
        const response = [];

        for (const depot of depots) {
            const vehicles = await vehicleService.getVehicles(req, depot.ID);

            const selected = scheduler.schedule(
                vehicles,
                depot.MechanicHours
            );

            response.push({
                DepotID: depot.ID,
                MechanicHours: depot.MechanicHours,
                SelectedTasks: selected,
            });
        }

        res.status(200).json({
            schedule: response,
        });
    } catch (err) {
        next(err);
    }
};

export default generateSchedule;