const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.get("Authorization")?.split(" ")[1];
  console.log(token);
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "ACCESS_TOKEN_SECRET");
  } catch (error) {
    res.status(500).json({ error });
  }
  if (!decodedToken) {
    const error = new Error("not authenticated");
    throw error;
  }
  req.id = decodedToken.id;
  next();
};
