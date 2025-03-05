import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    console.log("🔍 MongoDB URL:", process.env.MONGO_URL); // Debugging line

    if (!process.env.MONGO_URL) {
      throw new Error("❌ MONGO_URL is not defined in .env file");
    }

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }

};

export default dbConnection;
