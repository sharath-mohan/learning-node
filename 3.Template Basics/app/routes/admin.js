const express = require("express");
const router = express.Router();
const products = [];
router.get("/add-product", (req, res) => {
  res.render("add-product.pug");
});
router.post("/add-product", (req, res) => {
  const product = { title: req.body.title };
  products.push(product);
  console.log(products);
  res.redirect("/shop/products");
});
exports.routes = router;
exports.products = products;
