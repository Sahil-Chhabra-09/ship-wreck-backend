const highScore = require("../models/HighScore");

const getScores = async (req, res) => {
  try {
    const scores = await highScore.find({}).sort([["score", -1]]);
    res.status(200).json({ success: true, scores: scores });
  } catch (error) {
    console.log("Error occured while getting scores", error.message);
  }
};

const updateScores = async (req, res) => {
  try {
    const { name, password, score } = req.body;
    console.log(password);
    const user = await highScore.findOne({
      userName: name,
    });

    if (user === null) {
      await highScore.create({
        userName: name,
        password: password,
        score: score,
      });
    } else {
      if (user?.password === password) {
        await highScore.findOneAndUpdate(
          { userName: name, password: password },
          { score: Math.max(score, user.score) },
          { new: true }
        );
      } else {
        await highScore.create({
          userName: `${name}9`,
          password: password,
          score: score,
        });
      }
    }
    const newScores = await highScore.find({}).sort([["score", -1]]);
    res.status(201).json({ success: true, scores: newScores });
  } catch (error) {
    console.log("Error occured while updating scores", error);
  }
};

module.exports = { getScores, updateScores };
