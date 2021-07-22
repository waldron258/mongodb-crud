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
