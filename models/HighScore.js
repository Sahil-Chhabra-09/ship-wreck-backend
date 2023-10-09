const mongoose = require("mongoose");

const highScoreSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      min: 2,
      max: 40,
      required: true,
    },
    score: {
      type: Number,
      required: true,
      max: 250,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const highScore = mongoose.model("highScore", highScoreSchema);

module.exports = highScore;
