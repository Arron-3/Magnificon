const router = require("express").Router();
const TruckController = require("../controllers/TruckController");

router.post("/create", TruckController.createTruck);

router.get("/:id", TruckController.getTruckById);

router.get("/", TruckController.getTruckList);

router.delete("/delete/:id", TruckController.deleteTruckById);

router.put("/update/:id", TruckController.updateTruckById);

module.exports = router;
