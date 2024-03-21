const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const Users = require("./users");

const Posts = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
Posts.belongsTo(Users, {
  foreignKey: {
    name: "userId",
  },
});
module.exports = Posts;
