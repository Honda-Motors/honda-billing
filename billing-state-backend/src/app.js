import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookies from "cookie-parser";

dotenv.config({ path: "src/config/config.env" });

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve("frontend", "build")));
  app.get("*", (_req, res) => {
    res.sendFile(path.resolve("../", "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (_req, res) => {
    res.send("Api is running");
  });
}

export default app;
