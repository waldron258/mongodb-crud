const {
  isAValidModel,
  createMovieSchema,
  updateMovieSchema,
  deleteMovieSchema,
  likeMovieSchema,
} = require("./model");

const { insert, find, update, remove } = require("../../../database");

const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

async function snsRequest(message) {
  var params = {
    Message: JSON.stringify(message),
    TopicArn: process.env.TOPIC_ARN_SEND_EMAIL,
  };
  const SNS = new AWS.SNS({ apiVersion: "2010-03-31" });

  return await SNS.publish(params).promise();
}

exports.create = async (req, res, next) => {
  const { body } = req;
  try {
    if ((await isAValidModel(body, createMovieSchema)) === true) {
      var doc = await insert(
        body.database,
        body.collection,
        body.document,
        body.indexes,
        body.session
      );

      let sns = { sns: "CREATE", document: doc.ops };
      await snsRequest(sns);
      res.status(201);
      res.json({
        success: true,
        message: "Succesfully inserted to the database!",
        data: doc.ops,
      });
    } else {
      res.status(400);
      res.json({
        success: false,
        message: "Invalid request!",
      });
    }
  } catch (error) {
    next(new Error(error));
  }
};

exports.retrieve = async (req, res, next) => {
  const { query } = req;

  let document;

  if (query.name) {
    document = { name: query.name };
  } else if (query.movieId) {
    document = { movieId: query.movieId };
  } else {
    document = undefined;
  }

  try {
    var doc = await find(query.database, query.collection, document);
    res.status(201);
    res.json({
      success: true,
      message:
        query.name === undefined
          ? doc.length +
            " document(s) found in collection'" +
            query.collection +
            "'!"
          : doc.length + " document(s) found with name '" + query.name + "'!",
      data: doc,
    });
  } catch (error) {
    next(new Error(error));
  }
};

exports.update = async (req, res, next) => {
  const { body } = req;
  try {
    if ((await isAValidModel(body, updateMovieSchema)) === true) {
      var doc = await update(
        body.database,
        body.collection,
        body.document,
        body.newDocument
      );
      if (doc.result.n === 1) {
        res.status(201);
        res.json({
          success: true,
          message: "Succesfully updated!",
          dataUpdated: body.newDocument,
        });
      } else {
        res.status(404);
        res.json({
          success: false,
          message: "The id given was not found!",
        });
      }
    } else {
      res.status(400);
      res.json({
        success: false,
        message: "Invalid request!",
      });
    }
  } catch (error) {
    next(new Error(error));
  }
};

exports.remove = async (req, res, next) => {
  const { body } = req;
  try {
    if ((await isAValidModel(body, deleteMovieSchema)) === true) {
      var doc = await remove(body.database, body.collection, body.document);
      if (doc.result.n === 1) {
        res.status(201);
        res.json({
          success: true,
          message: "Succesfully deleted!",
          dataUpdated: body.newDocument,
        });
      } else {
        res.status(404);
        res.json({
          success: false,
          message: "The id given was not found!",
        });
      }
    } else {
      res.status(400);
      res.json({
        success: false,
        message: "Invalid request!",
      });
    }
  } catch (error) {
    next(new Error(error));
  }
};

exports.likes = async (req, res, next) => {
  const { body } = req;
  try {
    if ((await isAValidModel(body, likeMovieSchema)) === true) {
      var doc = await find(body.database, body.collection, {
        movieId: body.document.movieId,
      });
      if (doc.length > 0) {
        await update(
          body.database,
          body.collection,
          { movieId: body.document.movieId },
          { likes: doc[0].likes + 1 }
        );
        doc[0].reviewer = body.document.reviewer;
        let sns = { sns: "LIKE", document: doc[0] };
        await snsRequest(sns);

        res.status(201);
        res.json({
          success: true,
          dataUpdated: {
            likes: doc[0].likes + 1,
          },
        });
      } else {
        res.status(404);
        res.json({
          success: false,
          message: "The id given was not found!",
        });
      }
    } else {
      res.status(400);
      res.json({
        success: false,
        message: "Invalid request!",
      });
    }
  } catch (error) {
    next(new Error(error));
  }
};
/*
MONGOOSE

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
  const { query } = req;
  Model.find({
    $or: [
      { name: query.name },
      { releaseDate: query.releaseDate },
      { genre: query.genre },
      { director: query.director },
      { screenwriter: query.screenwriter },
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
*/
