const router = require("express").Router();
const controller = require("./controller");

/* ----------- POST ----------- */

router.route("/create").post(controller.create);
router.route("/update").post(controller.update);
router.route("/likes").post(controller.likes);

/* ----------- GET ----------- */

router.route("/retrieve").get(controller.retrieve);

/* ----------- DELETE ----------- */

router.route("/remove").delete(controller.remove);

module.exports = router;
