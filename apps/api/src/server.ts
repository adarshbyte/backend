import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ health: "ok" });
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
