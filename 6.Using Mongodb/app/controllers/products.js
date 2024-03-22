const Product = require("../models/products");

exports.getaddProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};
exports.postAddproduct = async (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const product = new Product(title, price, description, imageUrl);
  try {
    const result = await product.save();
    console.log(result);
    res.redirect("shop");
  } catch (error) {
    console.log(error);
  }
};
