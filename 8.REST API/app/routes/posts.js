const express = require("express");
const routes = express.Router();
const postsController = require("../controllers/posts");
routes.get("/", postsController.getPosts);
routes.post("/", postsController.addPost);
routes.get("/:id/", postsController.getPost);
routes.patch("/:id/", postsController.updatePost);
routes.delete("/:id/", postsController.deletePost);
module.exports = routes;
