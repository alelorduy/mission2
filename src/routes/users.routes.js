const router = require("express").Router();

const usersController = require("../controllers/users.controller");

router.route("/create").post(usersController.create);
router.route("/list").get(usersController.list);

module.exports = router;
