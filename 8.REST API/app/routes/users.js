const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();

router.put("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.delete("/user/:id", userController.deleteUser);
module.exports = router;
