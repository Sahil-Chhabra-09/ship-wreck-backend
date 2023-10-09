const express = require("express");
const { getScores, updateScores } = require("../controllers/HighScore");
const scoreRouter = express.Router();

scoreRouter.route("/scores").get(getScores).patch(updateScores);

module.exports = scoreRouter;
