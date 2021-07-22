const mongoose = require("mongoose");

const { Schema } = mongoose;

const fields = {
  name: { type: String },
  releaseDate: { type: Date },
  actors: { type: String },
  genre: { type: String },
  director: { type: String },
  screenwriter: { type: String },
};

const movies = new Schema(fields, { timestamps: true });

module.exports = {
  Model: mongoose.model("movies", movies),
  fields,
};
