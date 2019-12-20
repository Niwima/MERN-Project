const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const userModel = require('./model/userModel');
const config = require ('config')
const bcrypt = require('bcryptjs')
const key = config.get('jwtSecret')
const googleClientID = config.get('google.clientID')
const googleClientSecret = config.get('google.clientSecret')
const opts = {};
const GoogleStrategy = require('passport-google-oauth20').Strategy;

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= key;

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  userModel.findById(id).then((user) => {
    done(null, user.id);
  })
});


module.exports = passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: "http://localhost:5000/auth/redirect"
  }, 
   function(accessToken, refreshToken, profile, done) {
       userModel.findOne({googleId: profile.id})
        .then(user => {
            if (user) {
                return done(null, user);
            }else{
                const newUser = new userModel({
                    name: profile.displayName,
                    googleId: profile.id,
                    email: profile._json.email,
                    password: profile._json.sub,
                    image: profile._json.picture
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                        .then ((newUser) => {return done(null, newUser)})
                    })
                })
            }
        })
        .catch(err => console.log(err));
    })
);

