import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getAnalytics } from "../../services/admin.service";

const Analytics = () => {
    const [analytics, setAnalytics] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const { data } =
                await getAnalytics();

            setAnalytics(data.analytics);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <DashboardLayout>
                <p>Loading...</p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            {!analytics && (
                <div className="rounded-xl bg-white p-8 text-center">
                    No analytics available
                </div>
            )}
            
            <h1 className="mb-6 text-3xl font-bold">
                Analytics
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-white p-6 shadow">
                    <h3 className="text-gray-500">
                        Total Users
                    </h3>

                    <p className="mt-2 text-3xl font-bold">
                        {analytics.totalUsers}
                    </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                    <h3 className="text-gray-500">
                        Total Tasks
                    </h3>

                    <p className="mt-2 text-3xl font-bold">
                        {analytics.totalTasks}
                    </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                    <h3 className="text-gray-500">
                        Completed Tasks
                    </h3>

                    <p className="mt-2 text-3xl font-bold text-green-600">
                        {analytics.completedTasks}
                    </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow">
                    <h3 className="text-gray-500">
                        Pending Tasks
                    </h3>

                    <p className="mt-2 text-3xl font-bold text-orange-500">
                        {analytics.pendingTasks}
                    </p>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Analytics;