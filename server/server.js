import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDB from "./config/db.js";
import userRouter from "./routes/user.route.js";
import resumeRouter from "./routes/resume.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

await connectToDB();

app.get("/", (req, res) => res.send("Server is live.."));

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
