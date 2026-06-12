import api from "./api";

export const getMyTasks = () =>
    api.get("/tasks");

export const createTask = (taskData) =>
    api.post("/tasks", taskData);

export const updateTask = (
    taskId,
    taskData
) =>
    api.put(
        `/tasks/${taskId}`,
        taskData
    );

export const deleteTask = (taskId) =>
    api.delete(`/tasks/${taskId}`);