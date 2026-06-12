import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const { user } = useAuth();

    const userLinks = [
        {
            name: "Dashboard",
            path: "/dashboard",
        },
        {
            name: "My Tasks",
            path: "/tasks",
        },
    ];

    const adminLinks = [
        {
            name: "Dashboard",
            path: "/dashboard",
        },
        {
            name: "Analytics",
            path: "/admin/analytics",
        },
        {
            name: "Users",
            path: "/admin/users",
        },
        {
            name: "Tasks",
            path: "/admin/tasks",
        },
        {
            name: "Activity Logs",
            path: "/admin/activity-logs",
        },
    ];

    const links =
        user?.role === "Admin"
            ? adminLinks
            : userLinks;

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`fixed left-0 top-0 z-50 h-screen w-64 bg-white shadow-lg transition-transform duration-300 lg:translate-x-0 ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
            >
                <div className="border-b p-5">
                    <h1 className="text-xl font-bold text-blue-600">
                        TaskFlow
                    </h1>
                </div>

                <nav className="p-4 space-y-2">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block rounded-lg px-4 py-3 font-medium transition ${isActive
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-gray-100"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;