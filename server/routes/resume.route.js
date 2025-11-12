import express from "express";
import protectRoute from "../middlewares/auth.middleware.js";
import {
  createResume,
  deleteResume,
  getPublicResumeById,
  getResumeById,
  updateResume,
} from "../controllers/resume.controller.js";
import upload from "../config/multer.js";

const resumeRouter = express.Router();

resumeRouter.post("/create", protectRoute, createResume);
resumeRouter.put("/update", upload.single("image"), protectRoute, updateResume);
resumeRouter.delete("/delete/:resumeId", protectRoute, deleteResume);
resumeRouter.get("/get/:resumeId", protectRoute, getResumeById);
resumeRouter.get("/public/:resumeId", getPublicResumeById);

export default resumeRouter;
