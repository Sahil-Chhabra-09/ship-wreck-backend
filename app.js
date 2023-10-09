const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const scoreRouter = require("./routes/HighScore");

const connectDB = require("./db/connect");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("common"));

app.use("/api/v1", scoreRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    ping: "pong",
  });
});

app.get("*", (req, res) => {
  res.status(404).send("Route you requested seems incorrect");
});

const port = process.env.PORT || 6001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, (req, res) => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log("Couldn't start the server", error.message);
  }
};

start();
