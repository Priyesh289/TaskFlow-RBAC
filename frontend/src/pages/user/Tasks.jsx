import React, { useState, useEffect } from 'react'
import toast from "react-hot-toast";

import {
    createTask,
    getMyTasks,
    deleteTask,
    updateTask,
} from "../../services/task.service";
import DashboardLayout from '../../layouts/DashboardLayout';
import { useTask } from '../../context/TaskContext';
import { useAuth } from '../../context/AuthContext';

const UserTasks = () => {
    const [taskStatus, setTaskStatus] = useState('Pending')
    const { navigate } = useAuth();

    const {
        tasks, setTasks, title, setTitle,
        description, setDescription, editTaskId, setEditTaskId, fetchTasks
    } = useTask()

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleEditTask =
        async (task) => {
            setEditTaskId(task._id)
            setTitle(task.title);
            setDescription(task.description)
            navigate('/create-task')
        };

    const updateStatus = async (e, task) => {
        try {
            await updateTask(task._id, {
                status: e.target.value
            });

            fetchTasks();
        } catch (error) {
            console.log(error.response?.data);
        }
    };

    const handleCreateTask =
        async (e) => {
            e.preventDefault();

            try {
                if (editTaskId) {
                    await updateTask(editTaskId, {
                        title,
                        description
                    })
                    toast.success('update task')
                } else {

                    await createTask({
                        title,
                        description,
                    });

                    toast.success(
                        "Task created"
                    );

                }

                setTitle("");
                setDescription("");
                setEditTaskId(null)

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

    return (
        <DashboardLayout>
            <div>

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

                <div className="grid gap-4 ">
                    {tasks.map((task) => (
                        <div
                            key={task._id}
                            className="rounded-xl bg-white p-5 shadow
                             flex justify-between items-center"
                        ><div>
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
                                </p>
                            </div>
                            <div className="mt-4 flex justify-end gap-2">
                                <select
                                    value={task.status}
                                    onChange={(e) => updateStatus(e, task)}
                                    className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm
                                       focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Completed">Completed</option>
                                </select>
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