const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, done);
  });

  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        usernameField: "userID",
        passwordField: "userPassword",
        passReqToCallback: true,
      },
      async (req, userID, userPassword, done) => {
        try {
          const user = await User.findOne({ email: userID });
          if (user && (await user.validatePassword(userPassword))) {
            return done(null, user, req.flash("success", "로그인 했습니다"));
          }
          return done(
            null,
            false,
            req.flash(
              "danger",
              "아이디 또는 비밀번호와 일치하는 계정정보가 없습니다."
            )
          );
        } catch (err) {
          done(err);
        }
      }
    )
  );
};
