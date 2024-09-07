import jwt from "jsonwebtoken";

const isLoggedIn = (req, res, next) => {
  let token = jwt.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Token is required" });

  try {
    const decode = jwt.verify(token, "secret");
    req.user = decode;
    next();
  } catch (error) {
    console.log(error.message);
  }
}; 

export default isLoggedIn;
