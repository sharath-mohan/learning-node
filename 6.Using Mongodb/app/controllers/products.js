const Product = require("../models/products");

exports.getaddProduct = (req, res, next) => {
  res.render("admin/add-product", { pageTitle: "Add Product" });
};
exports.postAddproduct = async (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const product = new Product(title, price, description, imageUrl);
  try {
    const result = await product.save();
    res.redirect("/admin/products");
  } catch (error) {
    console.log(error);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.fetchAll();
    res.render("admin/all-products", { products, pageTitle: "Products" });
  } catch (error) {
    console.log(error);
  }
};
exports.getProduct = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  try {
    const product = await Product.fetchOne(id);
    console.log(product);
    res.render("admin/product", {
      product,
      pageTitle: "Product Details",
    });
  } catch (error) {
    console.log(error);
  }
};
