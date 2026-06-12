import React from 'react'
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";
import {
    getAllTasks,
    deleteTask,
} from "../../services/admin.service";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const { data } =
                await getAllTasks();

            setTasks(data.tasks);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteTask =
        async (taskId) => {
            const confirmed =
                window.confirm(
                    "Delete this task?"
                );

            if (!confirmed) return;

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

    return (
        <DashboardLayout>
            <h1 className="mb-6 text-3xl font-bold">
                Task Monitoring
            </h1>

            <div className="overflow-x-auto rounded-xl bg-white shadow">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">
                                Title
                            </th>

                            <th className="p-4 text-left">
                                Description
                            </th>

                            <th className="p-4 text-left">
                                Status
                            </th>

                            <th className="p-4 text-left">
                                Created By
                            </th>

                            <th className="p-4 text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks.map((task) => (
                            <tr
                                key={task._id}
                                className="border-b"
                            >
                                <td className="p-4">
                                    {task.title}
                                </td>

                                <td className="p-4">
                                    {task.description}
                                </td>

                                <td className="p-4">
                                    {task.status}
                                </td>

                                <td className="p-4">
                                    {task.createdBy?.name}
                                </td>

                                <td className="p-4">
                                    <button
                                        onClick={() =>
                                            handleDeleteTask(
                                                task._id
                                            )
                                        }
                                        className="rounded bg-red-500 px-3 py-1 text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}

export default Tasks