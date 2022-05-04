const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController")

router.get("/", controller.index);

// router.get("/mobile", controller.mobile);

// router.get("/web", controller.web);

router.get("/forum", controller.forum);

router.get("/weather", controller.weather);

router.get("/number", controller.number);

router.get("/twitter", controller.twitter);

router.get("/gpa", controller.gpa);


router.get("/contact", controller.contact);

module.exports = router;