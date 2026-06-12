import ActivityLog from "../models/activityLog.model.js";

const logActivity = async (
    userId,
    action,
    description
) => {
    try {
        await ActivityLog.create({
            userId,
            action,
            description,
        });
    } catch (error) {
        console.log(
            "Activity Log Error:",
            error.message
        );
    }
};

export default logActivity;