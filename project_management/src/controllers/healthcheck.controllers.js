import { ApiResponse } from "../utils/api_response.js";

const healthcheck = async (req, res) => {
    try {
        res.status(200).json(
            new ApiResponse(200, { message: "server is running" }, "OK"));
    } catch (error) {
        console.error("Health check error:", error);
        res.status(500).json(
            new ApiResponse(500, {}, "Error"));
    }
};

export { healthcheck };
