const Posts = require("../models/posts");
const addPost = async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  try {
    await Posts.create({
      //   title,
      content,
    });
    res.status(201).json({
      message: "created successfully",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getPosts = async (req, res, next) => {
  try {
    const products = await Posts.findAll();
    res.status(200).json({
      products,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getPost = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Posts.findByPk(id);
    if (!product) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.status(200).json({
        product,
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
const updatePost = async (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  try {
    const product = await Posts.findByPk(id);

    if (!product) {
      res.status(404).json({ message: "Post not found" });
    } else {
      product.title = title;
      product.content = content;
      product.save();
      res.status(200).json({
        message: "Updated Successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
const deletePost = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Posts.findByPk(id);

    if (!product) {
      res.status(404).json({ message: "Post not found" });
    } else {
      product.destroy();
      res.status(200).json({
        message: "deleted Successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
const controller = { addPost, getPosts, getPost, updatePost, deletePost };
module.exports = controller;
