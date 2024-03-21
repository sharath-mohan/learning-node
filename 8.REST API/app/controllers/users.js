var jwt = require("jsonwebtoken");
const Users = require("../models/users");

const signUp = async (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const passwrd = req.body.passwrd;
  try {
    const result = await Users.create({ email, name, passwrd });
    res.status(201).json({ message: "User Created successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to signup", error });
  }
};
const signIn = async (req, res, next) => {
  const email = req.body.email;
  const passwrd = req.body.passwrd;
  try {
    const user = await Users.findOne({ where: { email, passwrd } });
    if (user) {
      const accessToken = jwt.sign(
        { id: user.id, email: user.email },
        "ACCESS_TOKEN_SECRET",
        { expiresIn: "1h" }
      );
      const refreshToken = jwt.sign(
        { name: user.name, email: user.email },
        "REFRESH_TOKEN_SECRET",
        { expiresIn: "1d" }
      );
      res
        .status(200)
        .json({ message: "login successfully", accessToken, refreshToken });
    } else {
      res.status(400).json({ message: "invalid user name and password" });
    }
  } catch (error) {
    res.status(500).json({ message: "failed to signin", error });
  }
};
const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Users.destroy({ where: { id } });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to delete", error });
  }
};
const userController = { signUp, signIn, deleteUser };
module.exports = userController;
