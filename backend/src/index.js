const express = require("express");
const app = express();
const port = process.env.PORT || 1000;
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors({ origin: "*" })); // accepting request from all server

const taskRouter = require("../routes/taskRouters");

const mongoUri =
  "mongodb+srv://arijitpal6111:todoappproject@cluster0.ajq7gza.mongodb.net/To_Do_App?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", () => console.log("MongoDB connected succesfully"));

app.use(express.json()); // we are using json format for the data

app.use(taskRouter); // all routes must be listed after app.use(express.json()); ***

app.get("/", function (req, res) {
  res
    .status(200)
    .send("<h1 style=color:blue;text-align:center>Happy hacking!</h1>");
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
