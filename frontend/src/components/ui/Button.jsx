const Button = ({
    children,
    type = "button",
    ...props
}) => {
    return (
        <button
            type={type}
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;