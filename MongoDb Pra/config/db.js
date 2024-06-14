// db.js
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const url =
      "mongodb+srv://rahuln:HTV5MiJqrFO5ytZh@cluster0.zwjsixq.mongodb.net/";

    await mongoose.connect(url, {
      dbName: "sample_mflix",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.once("open", () => {
      console.log("Connected to MongoDB");
    });

    mongoose.connection.on("error", (error) => {
      console.error("Database connection error:", error);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = {
  connectDb,
};
