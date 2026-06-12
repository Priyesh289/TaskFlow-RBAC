import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getMyTasks } from "../../services/task.service";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data } =
        await getMyTasks();

      const tasks = data.tasks;

      const completed =
        tasks.filter(
          (task) =>
            task.status ===
            "Completed"
        ).length;

      const pending =
        tasks.filter(
          (task) =>
            task.status ===
            "Pending"
        ).length;

      setStats({
        total: tasks.length,
        completed,
        pending,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="mb-2 text-3xl font-bold">
        Welcome, {user?.name}
      </h1>

      <p className="mb-8 text-gray-500">
        Manage your tasks efficiently
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3>Total Tasks</h3>

          <p className="mt-2 text-3xl font-bold">
            {stats.total}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3>Completed</h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            {stats.completed}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3>Pending</h3>

          <p className="mt-2 text-3xl font-bold text-orange-500">
            {stats.pending}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;