const router = require("express").Router();
const TruckController = require("../controllers/TruckController");

router.post("/create", TruckController.createTruck);

router.get("/:id", TruckController.getTruckById);

router.get("/", TruckController.getTruckList);

router.get("/email/:email", TruckController.getTruckByEmail);

router.delete("/delete/:id", TruckController.deleteTruckById);

router.put("/update/:id", TruckController.updateTruckById);

module.exports = router;
