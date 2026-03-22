import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

const connectDB = async () => {
    try {
        // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

const getUserFromDB = async () => {
    try {
        const user = await User.findById(req.user._id);
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export { getUserFromDB };

export default connectDB;