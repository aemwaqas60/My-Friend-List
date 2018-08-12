const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt');


module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });


    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, (username, password, done) => {
        User.findOne({
                username: username
            })
            .then((user) => {
                if (!user) {
                    return done(null, false, {
                        message: "Invalid username"
                    });
                } else {
                    // match user password with encryped password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) {
                            throw err;
                        }
                        if (isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, {
                                message: "Incorrect password"
                            })
                        }
                    })
                }
            })
            .catch((err) => {

                done(null, false, {
                    message: "user not found | internal server error"
                })
            });
    }));


}