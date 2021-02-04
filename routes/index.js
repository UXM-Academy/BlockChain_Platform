var express = require("express");
var router = express.Router();
const Seller = require("../models/seller");
const User = require("../models/user");
const catchErrors = require("../lib/async-error");
var bufferImage = require("buffer-image");
var IPFS = require("ipfs-core");
var fs = require("fs");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("main", { title: "main" });
});

router.get("/progressLayout", function (req, res, next) {
  res.render("progress/progressLayout", { title: "progressLayout" });
});

router.get("/register", async function (req, res, next) {
  const id = await Seller.countDocuments();
  res.render("register", { title: "register", seller: { id: id } });
});

router.get("/jpgdownload/:ID", function (req, res) {
  async function run() {
    try {
      const ipfs = await IPFS.create();

      const chunks = []; //빈 리스트 설정
      for await (const chunk of ipfs.cat("/ipfs/" + req.params.ID)) {
        chunks.push(chunk);
      }

      const image = await bufferImage(chunks[0]);
      const result = await bufferImage.from(image);

      fs.writeFile(`${req.params.ID}.jpg`, result, (err) => {
        if (err) {
          console.log(err);
        }
      });

      ipfs.stop();
    } catch (err) {
      console.log(err);
    }
  }
  run();

  res.redirect("https://ipfs.io/ipfs/" + req.params.ID);
});
router.get("/login", function (req, res, next) {
  res.render("login", { title: req.query.title });
});

router.get("/join", async function (req, res, next) {
  const id = await User.countDocuments();
  res.render("join", { title: req.query.title, user_id: id });
});

router.get("/store", function (req, res, next) {
  res.render("store");
});

router.get("/category", function (req, res, next) {
  res.render("category", { title: req.query.title });
});

router.get(
  "/registerService/:id",
  catchErrors(async (req, res, next) => {
    let seller = await Seller.findById(req.params.id);
    res.render("registerService", { seller: seller });
  })
);
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
