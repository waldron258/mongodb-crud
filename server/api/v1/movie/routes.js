const router = require("express").Router();
const controller = require("./controller");

/* ----------- POST ----------- */

router.route("/create").post(controller.create);
router.route("/updateMovie").post(controller.updateMovie);

/* ----------- GET ----------- */

router.route("/getAllMovies").get(controller.getAllMovies);
router.route("/getMovie").get(controller.getMovie);

/* ----------- DELETE ----------- */

router.route("/deleteMovie").delete(controller.deleteMovie);

module.exports = router;
