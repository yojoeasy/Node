import { ApiResponse } from "../utils/api_response.js";
// import { getUserFromDB } from "../db/index.js";
import { asyncHandler } from "../utils/async_handler.js";

/** 
const healthcheck = async (req, res, next) => {
    try {
        // const user = await getUserFromDB(req.user._id);
        res.status(200).json(
            new ApiResponse(200, { message: "server is running" }, "OK"));
    } catch (error) {
        console.error("Health check error:", error);
        res.status(500).json(
            new ApiResponse(500, {}, "Error"));
    }
};
*/

const healthcheck = asyncHandler(async (req, res) => {
    res.status(200).json(
        new ApiResponse(200, { message: "server is running" }, "OK"));
});

export { healthcheck };
