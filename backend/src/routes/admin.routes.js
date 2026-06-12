import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";

import {
  getAllUsers,
  updateUserStatus,
  deleteUser,
  getAllTasks,
  deleteAnyTask,
  getActivityLogs,
  getAnalytics,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.use(authMiddleware);
router.use(adminMiddleware);

router.get("/users", getAllUsers);

router.patch(
  "/users/:id/status",
  updateUserStatus
);

router.delete(
  "/users/:id",
  deleteUser
);

router.get("/tasks", getAllTasks);

router.delete(
  "/tasks/:id",
  deleteAnyTask
);

router.get(
  "/activity-logs",
  getActivityLogs
);

router.get(
  "/analytics",
  getAnalytics
);

export default router;