import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import { registerUser } from "../../services/auth.service";

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
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
            const { data } = await registerUser(formData);

            toast.success(data.message);

            setFormData({
                name: "",
                email: "",
                password: "",
            });
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">
                <h1 className="mb-2 text-center text-3xl font-bold">
                    Create Account
                </h1>

                <p className="mb-6 text-center text-gray-500">
                    Register to get started
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Name"
                        placeholder="Enter name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

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
                        Register
                    </Button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-blue-600"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;