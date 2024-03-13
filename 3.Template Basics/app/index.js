const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const adminData = require("./routes/admin");
const shopData = require("./routes/shop");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", "./views");
app.set("view engine", "pug");
app.use("/admin", adminData.routes);
app.use("/shop", shopData.router);
app.use((req, res, next) => {
  res.status(404).render("404.pug");
});
app.listen(3000, () => {
  console.log("running on port 3000");
});
