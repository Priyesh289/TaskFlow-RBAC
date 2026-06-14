import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    const login = (token, userData) => {
        localStorage.setItem("token", token);

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("token");

        localStorage.removeItem("user");

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user, login, logout, navigate,
                
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () =>
    useContext(AuthContext);