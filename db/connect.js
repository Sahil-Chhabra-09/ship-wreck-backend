const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.log("Couldn't connect to db", error.message);
  }
};

module.exports = connectDB;
