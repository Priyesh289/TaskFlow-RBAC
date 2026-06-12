import api from "./api";

export const getAnalytics = () =>
    api.get("/admin/analytics");

export const getUsers = () =>
    api.get("/admin/users");

export const updateUserStatus = (
    userId,
    status
) =>
    api.patch(
        `/admin/users/${userId}/status`,
        { status }
    );

export const deleteUser = (userId) =>
    api.delete(`/admin/users/${userId}`);

export const getAllTasks = () =>
    api.get("/admin/tasks");

export const deleteTask = (taskId) =>
    api.delete(`/admin/tasks/${taskId}`);

export const getActivityLogs = () =>
  api.get("/admin/activity-logs");