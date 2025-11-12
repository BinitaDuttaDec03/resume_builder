import {
  getUserById,
  getUserResumes,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import protectRoute from "../middlewares/auth.middleware.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/data", protectRoute, getUserById);
userRouter.get("/resumes", protectRoute, getUserResumes);

export default userRouter;
