var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("main", { title: "main" });
});

router.get("/progressLayout", function (req, res, next) {
  res.render("progress/progressLayout", { title: "progressLayout" });
});

router.get("/register", function (req, res, next) {
  res.render("register", { title: "register", seller: {} });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: req.query.title });
});

router.get("/join", function (req, res, next) {
  res.render("join", { title: req.query.title });
});

router.get("/store", function (req, res, next) {
  res.render("store");
});

router.get("/category", function (req, res, next) {
  res.render("category", { title: req.query.title });
});

router.get("/registerService", function (req, res, next) {
  res.render("registerService");
});

router.get("/serviceInfo", function (req, res, next) {
  res.render("serviceInfo");
});

router.get("/serviceInfoEditor", function (req, res, next) {
  res.render("serviceInfoEditor");
});

router.get("/completeTransaction", function (req, res, next) {
  res.render("completeTransaction");
});

module.exports = router;
