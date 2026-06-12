import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js";

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Management API Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;