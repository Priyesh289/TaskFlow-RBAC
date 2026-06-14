import React, { createContext, useContext, useState } from 'react'
const TaskContext = createContext();
import { getMyTasks } from '../services/task.service';
import toast from "react-hot-toast";

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editTaskId, setEditTaskId] = useState(null);

    const fetchTasks = async () => {
        try {
            const { data } =
                await getMyTasks();

            setTasks(data.tasks);
        } catch (error) {
            console.log(error);
        }
    };

    const value = {
        tasks, setTasks, title, setTitle, description, setDescription,
        editTaskId, setEditTaskId, fetchTasks,toast
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () =>
    useContext(TaskContext)
