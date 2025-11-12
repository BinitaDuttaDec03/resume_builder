import express from "express";
import protectRoute from "../middlewares/auth.middleware.js";
import {
  enhanceJobDescription,
  updateResume,
} from "../controllers/ai.controller.js";

const aiRouter = express.Router();

aiRouter.post("/enhance-pro-sum", protectRoute, enhanceProfessionalSummary);
aiRouter.post("/enhance-job-desc", protectRoute, enhanceJobDescription);
aiRouter.post("/upload-resume", protectRoute, updateResume);

export default aiRouter;
