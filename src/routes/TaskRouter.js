const router = require("express").Router();
const TaskController = require("../controllers/TaskController");

router.post("/create", TaskController.createTask);

router.get("/:id", TaskController.getTaskById);

router.get("/", TaskController.getTaskList);

router.put("/update/:id", TaskController.updateTaskById);

router.get("/getByEmail/:email", TaskController.getTaskByEmailAndStatus);

module.exports = router;
