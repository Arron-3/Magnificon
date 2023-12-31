const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.post("/register", UserController.registerUser);

router.post("/login", UserController.loginUser);

router.get("/list", UserController.getUserList);

router.get("/:email", UserController.getSpecificUserByEmail);

router.get("/userId/:id", UserController.getUserById);

router.put("/update/:id", UserController.updateUserById);

router.delete("/delete/:id", UserController.deleteUserById);

router.get("/getByRole/driver", UserController.getRoleDriver);

router.put("/update-password/:email", UserController.updatePasswordByEmail);

module.exports = router;
