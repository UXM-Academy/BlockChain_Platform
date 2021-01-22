var express = require("express");
var router = express.Router();
const catchErrors = require("../lib/async-error");
const User = require("../models/user");
const Seller = require("../models/seller");
const multer = require("multer");
const fs = require("fs-extra");
const path = require("path");
function needAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/authLayout?title=login");
  }
}

function validateForm(form, options) {
  var userID = form.userID || "";
  userID = userID.trim();

  if (!userID || userID.indexOf("@") == -1) {
    return "올바른 이메일 주소를 입력해주세요.";
  }

  if (!form.userPassword || form.userPassword.length < 8) {
    return "올바른 비밀번호를 입력해주세요.";
  }
  return null;
}

const mimetypes = {
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/png": "png",
};
const upload = multer({
  dest: "tmp",
  fileFilter: (req, file, cb) => {
    var ext = mimetypes[file.mimetype];
    if (!ext) {
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  },
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/home", function (req, res, next) {
  res.send("Home");
});

router.get(
  "/seller/edit/:id",
  needAuth,
  catchErrors(async (req, res, next) => {
    var seller = await Seller.findOne({ seller_id: req.params.id });
    res.render("sellerInfoEditor", { seller: seller });
  })
);

router.get(
  "/sellerInfo/:id",
  needAuth,
  catchErrors(async (req, res, next) => {
    var seller = await Seller.findOne({ seller_id: req.params.id });
    res.render("sellerInfo", { seller: seller });
  })
);
router.get(
  "/seller/edit/:id",
  needAuth,
  catchErrors(async (req, res, next) => {
    var seller = await Seller.findOne({ seller_id: req.params.id });
    res.render("sellerInfoEditor", { seller: seller });
  })
);
router.post(
  "/",
  catchErrors(async (req, res, next) => {
    var err = validateForm(req.body, { needPassword: true });
    if (err) {
      req.flash("danger", err);
      return res.redirect("back");
    }
    var user = await User.findOne({ email: req.body.userID });
    console.log("USER???", user);
    if (user) {
      req.flash("danger", "이메일이 이미 존재합니다.");
      return res.redirect("back");
    }
    user = new User({
      email: req.body.userID,
      name: req.body.userName,
    });
    user.password = await user.generateHash(req.body.userPassword);

    await user.save();
    res.redirect("/");
  })
);

router.post(
  "/seller",
  needAuth,
  upload.single("img"),
  catchErrors(async (req, res, next) => {
    var seller = new Seller({
      seller_id: req.user._id,
      nickName: req.body.nickName,
      university: req.body.university,
      sellerIntro: req.body.sellerIntro,
      phone: req.body.phone,
    });
    if (req.file) {
      const dest = path.join(__dirname, "../public/images/uploads/"); // 옮길 디렉토리
      console.log("File ->", req.file); // multer의 output이 어떤 형태인지 보자.
      const filename = seller.id + "/" + req.file.originalname;
      await fs.move(req.file.path, dest + filename);
      seller.img = "/images/uploads/" + filename;
    }

    if (req.body.design) {
      seller.major.push(req.body.design);
    }
    if (req.body.programming) {
      seller.major.push(req.body.programming);
    }
    if (req.body.photo) {
      seller.major.push(req.body.photo);
    }

    await seller.save();
    const user = req.user;
    user.seller = true;
    await user.save();
    req.flash("success", "판매자로 등록되었습니다.");
    res.redirect("/");
  })
);

module.exports = router;
