const express = require("express");
const connectDB = require("./database");
const bodyParser = require("body-parser");
const api = require("./api/v1");
const cors = require("cors");

const logger = require("winston");

connectDB();

//MY TEST
//const { routes: movieRoutes } = require("./api/v1/movie/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", api);
app.use((req, res, next) => {
  const message = "These are not the Droids you are looking for";

  logger.info(message);

  res.status(404);
  res.json({
    error: true,
    message: message,
  });
});

module.exports = app;
