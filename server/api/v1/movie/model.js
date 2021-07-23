const mongoose = require("mongoose");

const { Schema } = mongoose;

const fields = {
  name: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  actors: { type: String, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  screenwriter: { type: String, required: true },
};

const movies = new Schema(fields, { timestamps: true });

module.exports = {
  Model: mongoose.model("movies", movies),
  fields,
};
