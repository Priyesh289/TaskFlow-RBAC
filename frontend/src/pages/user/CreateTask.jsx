import React, { useState } from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import { useTask } from '../../context/TaskContext';
import { updateTask, createTask } from '../../services/task.service';

const CreateTask = () => {

    const {
        tasks, setTasks, title, setTitle,
        description, setDescription, editTaskId, setEditTaskId, fetchTasks, toast
    } = useTask()

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

    return (
        <DashboardLayout>
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
                    {editTaskId ? "Update Task" : "Create Task"}
                </button>
            </form>
        </DashboardLayout>
    )
}

export default CreateTask