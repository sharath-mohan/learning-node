const express = require("express");
const { getAllProducts, getProduct } = require("../controllers/products");
const router = express.Router();
router.get("/products", getAllProducts);
router.get("/product/:id", getProduct);
router.post("/product-delete/:id", getProduct);
module.exports = router;
