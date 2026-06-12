import React from 'react'
import { useAuth } from "../../context/AuthContext";

import DashboardLayout from "../../layouts/DashboardLayout";

const Dashboard = () => {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>
        </DashboardLayout>
    );
};

export default Dashboard;