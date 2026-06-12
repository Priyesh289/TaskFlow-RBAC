import React from 'react'
import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import toast from "react-hot-toast";
import {
    getUsers, updateUserStatus, deleteUser,
} from "../../services/admin.service";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleStatusChange =
        async (userId, currentStatus) => {
            try {
                const newStatus =
                    currentStatus === "Active"
                        ? "Inactive"
                        : "Active";

                await updateUserStatus(
                    userId,
                    newStatus
                );

                toast.success(
                    "Status updated"
                );

                fetchUsers();
            } catch (error) {
                toast.error(
                    "Failed to update status"
                );
            }
        };
    const handleDeleteUser =
        async (userId) => {
            const confirmed =
                window.confirm(
                    "Delete this user?"
                );

            if (!confirmed) return;

            try {
                await deleteUser(userId);

                toast.success(
                    "User deleted"
                );

                fetchUsers();
            } catch (error) {
                toast.error(
                    "Delete failed"
                );
            }
        };

    const fetchUsers = async () => {
        try {
            const { data } = await getUsers();

            setUsers(data.users);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <DashboardLayout>
            {users.length === 0 && (
                <div className="p-10 text-center">
                    No users found
                </div>
            )}

            <h1 className="mb-6 text-3xl font-bold">
                User Management
            </h1>

            <div className="overflow-x-auto rounded-xl bg-white shadow">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">
                                Name
                            </th>

                            <th className="p-4 text-left">
                                Email
                            </th>

                            <th className="p-4 text-left">
                                Role
                            </th>

                            <th className="p-4 text-left">
                                Status
                            </th>

                            <th className="p-4 text-left">
                                Actions
                            </th>
                            <th className="p-4 text-left">
                                Delete
                            </th>
                        </tr>
                    </thead>

                    <tbody className="md:hidden space-y-4">
                        {users.map((user) => (
                            <tr
                                key={user._id}
                                className="border-b"
                            >
                                <td className="p-4">
                                    {user.name}
                                </td>

                                <td className="p-4">
                                    {user.email}
                                </td>

                                <td className="p-4">
                                    {user.role}
                                </td>

                                <td className="p-4">
                                    {user.status}
                                </td>

                                <td className="p-4">
                                    <button
                                        onClick={() =>
                                            handleStatusChange(
                                                user._id,
                                                user.status
                                            )
                                        }
                                        className="rounded bg-blue-500 px-3 py-1 text-white"
                                    >
                                        Toggle Status
                                    </button>

                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDeleteUser(user._id)
                                        }
                                        className="ml-2 rounded bg-red-500 px-3 py-1 text-white"
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
    )
}

export default Users