export const UserRolesEnum = {
    ADMIN: "admin",
    PROJECT_MANAGER: "project_manager",
    TEAM_LEAD: "team_lead",
    MEMBER: "member",
    DEVELOPER: "developer",
    QA: "qa",
    DESIGNER: "designer",
    INTERN: "intern",
    GUEST: "guest",
};

export const TaskStatusEnum = {
    TODO: "todo",
    PENDING: "pending",
    IN_PROGRESS: "in_progress",
    COMPLETED: "completed",
    ON_HOLD: "on_hold",
    DONE: "done",
};

export const DB_NAME = "projectmanagement";

export const AvailableUserRoles = Object.values(UserRolesEnum);
export const AvailableTaskStatus = Object.values(TaskStatusEnum);