import React, { useState, useEffect } from 'react'
import toast from "react-hot-toast";
import {
    createTask,
    getMyTasks,
    deleteTask,
    updateTask,
} from "../../services/task.service";
import DashboardLayout from '../../layouts/DashboardLayout';

const UserTasks = () => {
    const [tasks, setTasks] = useState([]);

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const { data } =
                await getMyTasks();

            setTasks(data.tasks);
        } catch (error) {
            console.log(error);
        }
    };
    const handleCreateTask =
        async (e) => {
            e.preventDefault();

            try {
                await createTask({
                    title,
                    description,
                });

                setTitle("");
                setDescription("");

                toast.success(
                    "Task created"
                );

                fetchTasks();
            } catch (error) {
                toast.error(
                    "Failed to create task"
                );
            }
        };
    const handleDeleteTask =
        async (taskId) => {
            try {
                await deleteTask(taskId);

                toast.success(
                    "Task deleted"
                );

                fetchTasks();
            } catch (error) {
                toast.error(
                    "Delete failed"
                );
            }
        };
    const handleEditTask =
        async (task) => {
            const title =
                window.prompt(
                    "Title",
                    task.title
                );

            if (!title) return;

            await updateTask(
                task._id,
                {
                    title,
                }
            );

            fetchTasks();
        };
    return (
        <DashboardLayout>
            <div>

                <form
                    onSubmit={handleCreateTask}
                    className="mb-8 rounded-xl bg-white p-6 shadow"
                >
                    <input
                        type="text"
                        placeholder="Task title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        className="mb-3 w-full rounded border p-3"
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) =>
                            setDescription(
                                e.target.value
                            )
                        }
                        className="mb-3 w-full rounded border p-3"
                    />

                    <button type='submit'
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        Create Task
                    </button>
                </form>

                {tasks.length === 0 && (
                    <div className="rounded-xl bg-white p-10 text-center">
                        <h3 className="text-lg font-semibold">
                            No Tasks Yet
                        </h3>

                        <p className="text-gray-500">
                            Create your first task.
                        </p>
                    </div>
                )}
                
                <div className="grid gap-4">
                    {tasks.map((task) => (
                        <div
                            key={task._id}
                            className="rounded-xl bg-white p-5 shadow"
                        >
                            <h3 className="text-lg font-bold">
                                {task.title}
                            </h3>

                            <p className="mt-2 text-gray-600">
                                {task.description}
                            </p>

                            <p className="mt-3">
                                Status:
                                <span className="ml-2 font-semibold">
                                    {task.status}
                                </span>
                            </p><div className="mt-4 flex justify-end gap-2">
                                <button
                                    onClick={() =>
                                        handleEditTask(task)
                                    }
                                    className="rounded bg-green-500 px-3 py-1 text-white"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() =>
                                        handleDeleteTask(task._id)
                                    }
                                    className="rounded bg-red-500 px-3 py-1 text-white"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default UserTasks