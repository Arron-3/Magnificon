const router = require("express").Router();
const MaintenanceController = require("../controllers/MaintenanceController");

router.post("/create", MaintenanceController.createMaintenance);

router.get("/:id", MaintenanceController.getMaintenanceById);

router.get("/", MaintenanceController.getMaintenanceList);

module.exports = router;
