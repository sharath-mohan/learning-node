const Posts = require("../models/posts");
const addPost = async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const userId = req.userId;
  console.log(userId);
  try {
    await Posts.create({
      title,
      content,
      userId,
    });
    res.status(201).json({
      message: "created successfully",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getPosts = async (req, res, next) => {
  const userId = req.userId;
  try {
    const posts = await Posts.findAll({
      where: {
        userId,
      },
    });
    res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getPost = async (req, res, next) => {
  const id = req.params.id;
  const userId = req.userId;
  try {
    const post = await Posts.findOne({
      where: {
        id,
        userId,
      },
    });
    if (!post) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.status(200).json({
        post,
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
  const userId = req.userId;
  try {
    const post = await Posts.findOne({
      where: {
        id,
        userId,
      },
    });

    if (!post) {
      res.status(404).json({ message: "Post not found" });
    } else {
      post.title = title;
      post.content = content;
      post.save();
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
  const userId = req.userId;
  try {
    const post = await Posts.findOne({
      where: {
        id,
        userId,
      },
    });

    if (!post) {
      res.status(404).json({ message: "Post not found" });
    } else {
      post.destroy();
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
