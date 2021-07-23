const { Model } = require("./model");
//const fs = require("fs");
//const { promisify } = require("util");
//const unlinkAsync = promisify(fs.unlink);

/*
exports.getAll = (req, res, next) => {
  Model.find({ companyId: req.query.companyId })
    .then((apps) => {
      res.send(apps);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while retriving Apps.",
      });
    });
};
*/

exports.create = async (req, res, next) => {
  const { body } = req;
  var document = new Model(body);
  try {
    var doc = await document.save();
    res.status(201);
    res.json({
      success: true,
      data: doc,
    });
  } catch (error) {
    next(new Error(error));
  }
};

exports.getMovie = (req, res, next) => {
  const { body } = req;
  Model.find({
    $or: [
      { name: body.name },
      { releaseDate: body.releaseDate },
      { genre: body.genre },
      { director: body.director },
      { screenwriter: body.screenwriter },
    ],
  })
    //.populate("actors")
    .then((movie) => {
      res.send(movie);
    })
    .catch((error) => {
      res.send({
        message: "Some error ocurred while retriving this movie!",
        error: error,
      });
    });
};

exports.getAllMovies = (req, res, next) => {
  Model.find({})
    //.populate("actors")
    .then((movies) => {
      res.send(movies);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while retriving movies!",
      });
    });
};

exports.updateMovie = (req, res, next) => {
  const { body } = req;
  Model.findOneAndUpdate({ _id: body.id }, body)
    .then(() => {
      res.send({ success: true });
    })
    .catch(() => {
      res.status(500).send({
        message: "Some error occurred while updating the movie",
      });
    });
};

exports.deleteMovie = async (req, res, next) => {
  const { body } = req;
  Model.findByIdAndDelete(body.id, body)
    .then(() => {
      res.send({
        success: true,
        message: "The movie was successfully deleted!",
      });
    })
    .catch(() => {
      res.status(500).send({
        message: "Some error occurred while deleting the movie!",
      });
    });
};
