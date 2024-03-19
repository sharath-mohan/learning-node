const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();

router.put("/signup", userController.signUp);
router.post("/signin", userController.signIn);
module.exports = router;
