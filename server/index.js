const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("winston");

const api = require("./api/v1");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", api);
app.use((req, res, next) => {
  const message = "Bad request";

  logger.info(message);

  res.status(404);
  res.json({
    error: true,
    message: message,
  });
});

module.exports = app;
