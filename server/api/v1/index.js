const router = require("express").Router();

const movies = require("./movie/routes");

router.use("/movies", movies);

module.exports = router;
