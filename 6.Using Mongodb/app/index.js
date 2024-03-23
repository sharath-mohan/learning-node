const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { client } = require("./utils/db");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.get("/", (req, res) => {
  res.send("Express app");
});

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

const main = async () => {
  try {
    await client.connect();
    app.listen(3000, () => {
      console.log("app running on port http://localhost:3000");
    });
  } catch (error) {
    console.error("erorr", error);
  }
};
main();
