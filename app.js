var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var methodOverride = require("method-override");
var session = require("express-session");
var passport = require("passport");
var passportConfig = require("./lib/passport-config"); //passport 로그인
var flash = require("connect-flash");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var sellerRouter = require("./routes/seller");

var app = express();
app.use(methodOverride("_method"));

//mongodb 연결
const mongoose = require("mongoose");
const connection_string =
  "mongodb+srv://uxm572721:uxm572721@cluster0.5giva.mongodb.net/uxmedia?retryWrites=true&w=majority";
mongoose.connect(connection_string, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));
app.use(flash()); // flash message를 사용할 수 있도록

//session설정
const sessionStore = new session.MemoryStore();
const sessionId = "uxm.ipfs";
const sessionSecret = "uxmipfs";
// session을 사용할 수 있도록.
app.use(
  session({
    name: sessionId,
    resave: true,
    saveUninitialized: true,
    store: sessionStore,
    secret: sessionSecret,
  })
);

//passport
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

app.use(function (req, res, next) {
  res.locals.currentUser = req.user; // passport는 req.user로 user정보 전달
  res.locals.flashMessages = req.flash();
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/seller", sellerRouter);
require("./routes/signin")(app, passport);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
