const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = async () => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017/shop");
    _db = client.db();
  } catch (error) {
    throw error;
  }
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "DB not found";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
