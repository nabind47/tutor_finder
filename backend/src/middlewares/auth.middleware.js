import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - Missing or invalid token" });
    }

    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
};

export default authMiddleware;
