const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("myproject");

// const MongoClient = mongodb.MongoClient;
// let _db;
// const mongoConnect = async () => {
//   try {
//     const client = await MongoClient.connect();
//     _db = client.db();
//   } catch (error) {
//     throw error;
//   }
// };
// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw "DB not found";
// };
// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
exports.client = client;
exports.db = db;
