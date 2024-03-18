const express = require("express");
const app = express();
const sequelize = require("./utils/db");
const Posts = require("./models/posts");
const postRoutes = require("./routes/posts");
app.use(express.json());
app.use("/posts", postRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});
const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();

    app.listen(3000, () => {
      console.log("App running");
    });
  } catch (error) {
    console.error(err);
  }
};
main();
