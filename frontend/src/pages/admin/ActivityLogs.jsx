import React from 'react'
import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getActivityLogs } from "../../services/admin.service";
import Loader from '../../components/ui/Loader';

const ActivityLogs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchLogs = async () => {
        try {
            const { data } =
                await getActivityLogs();

            setLogs(data.logs);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLogs();
    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <Loader />
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <h1 className="mb-6 text-3xl font-bold">
                Activity Logs
            </h1>

            <div className="overflow-x-auto rounded-xl bg-white shadow">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">
                                User
                            </th>

                            <th className="p-4 text-left">
                                Action
                            </th>

                            <th className="p-4 text-left">
                                Description
                            </th>

                            <th className="p-4 text-left">
                                Date
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {logs.map((log) => (
                            <tr
                                key={log._id}
                                className="border-b"
                            >
                                <td className="p-4">
                                    {log.userId?.name}
                                </td>

                                <td className="p-4">
                                    {log.action}
                                </td>

                                <td className="p-4">
                                    {log.description}
                                </td>

                                <td className="p-4">
                                    {new Date(
                                        log.createdAt
                                    ).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}

export default ActivityLogs