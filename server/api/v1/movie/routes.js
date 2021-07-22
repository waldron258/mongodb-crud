const router = require("express").Router();
const controller = require("./controller");

/* ----------- Getters ----------- */

router.route("/create").post(controller.create);

module.exports = router;
