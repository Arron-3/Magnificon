const router = require("express").Router();
const PreventiveMaintenanceController = require("../controllers/PreventiveMaintenanceController");

router.post(
  "/create",
  PreventiveMaintenanceController.createPreventiveMaintenance
);

router.get(
  "/:id",
  PreventiveMaintenanceController.getPreventiveMaintenanceById
);

router.get("/", PreventiveMaintenanceController.getPreventiveMaintenanceList);

router.get(
  "/month/count",
  PreventiveMaintenanceController.getPreventiveMaintenanceCountPerMonth
);

module.exports = router;
