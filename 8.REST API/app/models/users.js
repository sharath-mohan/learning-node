const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Users = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwrd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Users;
