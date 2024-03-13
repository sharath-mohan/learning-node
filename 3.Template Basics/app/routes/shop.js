const express = require("express");
const router = express.Router();
const adminData = require("./admin");
router.get("/products", (req, res) => {
  res.render("shop.pug", { products: adminData.products });
});
exports.router = router;
