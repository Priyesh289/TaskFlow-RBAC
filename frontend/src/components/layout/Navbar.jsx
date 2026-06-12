import { Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Navbar = ({ setIsOpen }) => {
    const { user, logout } = useAuth();

    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-4">
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden"
            >
                <Menu size={24} />
            </button>

            <div className="ml-auto flex items-center gap-4">
                <div className="text-right">
                    <p className="font-semibold">
                        {user?.name}
                    </p>

                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700">
                        {user?.role}
                    </span>
                </div>

                <button
                    onClick={logout}
                    className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Navbar;