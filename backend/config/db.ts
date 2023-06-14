import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI: string = process.env.MONGO_URI ?? ""
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
