import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {
  createTask,
  getMyTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createTask);

router.get("/", getMyTasks);

router.get("/:id", getTaskById);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;