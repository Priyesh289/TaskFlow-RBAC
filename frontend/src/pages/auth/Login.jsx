import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { useState } from "react";

import toast from "react-hot-toast";

import { loginUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

const Login = () => {

    const { login, navigate } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await loginUser(formData);

            login(data.token, data.user);

            toast.success("Login successful");

            navigate("/dashboard");
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">
                <h1 className="mb-2 text-center text-3xl font-bold">
                    Welcome Back
                </h1>

                <p className="mb-6 text-center text-gray-500">
                    Login to continue
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <Button type="submit">
                        Login
                    </Button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-medium text-blue-600"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;