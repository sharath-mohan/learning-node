const express = require("express");
const {
  getaddProduct,
  postAddproduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  getEditProduct,
  postEditproduct,
} = require("../controllers/admin");
const router = express.Router();
router.get("/add-product", getaddProduct);
router.post("/add-product", postAddproduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.get("/products/:id/edit", getEditProduct);
router.post("/products/:id/edit", postEditproduct);
router.post("/delete-product", deleteProduct);
module.exports = router;
