require("dotenv").config("");

const config = {
  db: {
    uri: process.env.DB_URI,
  },
};

module.exports = config;
