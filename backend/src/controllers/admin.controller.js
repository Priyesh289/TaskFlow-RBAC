import User from "../models/user.model.js";
import Task from "../models/task.model.js";
import ActivityLog from "../models/activityLog.model.js";

export const getAllUsers = async (req, res) => {
    const users = await User.find()
        .select("-password");

    res.status(200).json({
        success: true,
        count: users.length,
        users,
    });
};


export const updateUserStatus = async (req, res) => {
    const { status } = req.body;

    const user = await User.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
    ).select("-password");

    res.status(200).json({
        success: true,
        user,
    });
};

export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(
        req.params.id
    );

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
    });
};

export const getAllTasks = async (req, res) => {
    const tasks = await Task.find()
        .populate(
            "createdBy",
            "name email"
        );

    res.status(200).json({
        success: true,
        count: tasks.length,
        tasks,
    });
};


export const deleteAnyTask = async (req, res) => {
    const task = await Task.findById(
        req.params.id
    );

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found",
        });
    }

    await task.deleteOne();

    res.status(200).json({
        success: true,
        message: "Task deleted",
    });
};

export const getActivityLogs = async (req, res) => {
    const logs =
        await ActivityLog.find()
            .populate(
                "userId",
                "name email"
            )
            .sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        count: logs.length,
        logs,
    });
};


export const getAnalytics = async (req, res) => {
    const totalUsers =
        await User.countDocuments();

    const totalTasks =
        await Task.countDocuments();

    const completedTasks =
        await Task.countDocuments({
            status: "Completed",
        });

    const pendingTasks =
        await Task.countDocuments({
            status: "Pending",
        });

    res.status(200).json({
        success: true,
        analytics: {
            totalUsers,
            totalTasks,
            completedTasks,
            pendingTasks,
        },
    });
};