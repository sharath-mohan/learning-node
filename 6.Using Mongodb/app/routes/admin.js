const express = require("express");
const { getaddProduct, postAddproduct } = require("../controllers/products");
const router = express.Router();
router.get("/add-product", getaddProduct);
router.post("/add-product", postAddproduct);
module.exports = router;
