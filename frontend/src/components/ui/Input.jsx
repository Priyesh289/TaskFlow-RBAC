const Input = ({
    label,
    type = "text",
    ...props
}) => {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            <input
                type={type}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                {...props}
            />
        </div>
    );
};

export default Input;