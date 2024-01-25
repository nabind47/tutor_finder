import cors from "cors";
import express from "express";

import userRoutes from "./routes/user.routes.js";
import connectDB from "./utils/db.js";

const app = express();

app.use(express.json());
app.use(cors({ allowedHeaders: ["*"] }));

app.use("/users", userRoutes);

app.listen(4000, () => {
  connectDB();
  console.log("http://localhost:4000");
});
