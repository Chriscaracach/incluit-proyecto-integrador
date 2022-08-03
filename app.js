require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const config = require("config");

const indexRouter = require("./src/routes/index");
const schoolsRouter = require("./src/routes/schools");
const usersRouter = require("./src/routes/users");

const app = express();

//Mongoose
const mongoose = require("mongoose");
const mongoConnectionUrl = config.get("dataBase.host");
mongoose
  .connect(mongoConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting database");
    console.log(err);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/schools", schoolsRouter);
//app.use("/users", usersRouter);

module.exports = app;
