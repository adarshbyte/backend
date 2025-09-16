import express from "express";
import dotenv from "dotenv";
import userRouter from './route/userRoute.js';
import { errorHandler } from "./middleware/errorHandler.js";
import limiter from "./middleware/rateLimiter.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.get("/health", (req, res) => {
  res.status(200).json({ health: "ok" });
});

app.use('/user',userRouter)
app.use(errorHandler);

app.use(limiter);
app.get("/limiter", (req, res) => {
  res.send("✅ You're inside! (Rate limited)");
});
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
