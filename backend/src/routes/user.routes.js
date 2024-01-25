import express from "express";

import { profile, signin, signup } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/", authMiddleware, profile);

export default router;
