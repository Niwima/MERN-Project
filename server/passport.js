const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const userModel = require('./model/userModel');
const config = require ('config');
const key = config.get('jwtSecret');
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= key;

module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        userModel.findById(jwt_payload.id)
        .then(user => {
            if (user) {
                return done(null, user);
            }
                return done(null, false);
        })
        .catch(err => console.log(err));
    })
);

//passport.authenticate("jwt", { session: false })


