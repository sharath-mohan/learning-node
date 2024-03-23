const { ObjectId } = require("mongodb");
const { db } = require("../utils/db");
class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
  save() {
    return db.collection("products").insertOne(this);
  }
  static fetchAll() {
    return db.collection("products").find().toArray();
  }
  static fetchOne(id) {
    const _id = new ObjectId(id);
    return db.collection("products").find({ _id }).next();
  }
  static removeOne(id) {
    const _id = new ObjectId(id);
    return db.collection("products").deleteOne({ _id });
  }
  updateOne(id) {
    const _id = new ObjectId(id);
    return db.collection("products").updateOne({ _id }, { $set: this });
  }
}
module.exports = Product;
