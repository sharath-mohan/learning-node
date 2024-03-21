const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.get("Authorization")?.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "ACCESS_TOKEN_SECRET");
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }
  if (!decodedToken) {
    const error = new Error("not authenticated");
    error.statusCode = 401;
    throw error;
  }
  console.log(decodedToken);
  req.userId = decodedToken.id;
  next();
};
