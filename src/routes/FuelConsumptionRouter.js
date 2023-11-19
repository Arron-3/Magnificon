const router = require("express").Router();
const FuelConsumptionController = require("../controllers/FuelConsumptionController");

router.post("/create", FuelConsumptionController.createFuelConsumption);

router.get("/:id", FuelConsumptionController.getFuelConsumptionById);

router.get("/", FuelConsumptionController.getFuelConsumptionList);

module.exports = router;
