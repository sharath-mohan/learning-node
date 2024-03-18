const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("rest_app", "root", "sharath", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
