const bcrypt = require('bcryptjs');
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var sendMailEmitter = require('../helpers/SendMails');


module.exports = {
    // user signup controller function
    signup(req, res, next) {
        let newUser = req.body;
        bcrypt.genSalt(10, (saltError, salt) => {
            if (saltError) {
                next(saltError);
            }
            bcrypt.hash(newUser.password, salt, (hashError, hashPassword) => {
                if (hashError) {
                    next(hashError);
                }
                newUser.password = hashPassword;
                User.create(newUser)
                    .then((user) => {
                        sendMailEmitter.emit('sendEmail', user.email);
                        res.status(200).json({
                            message: "Signup successfull",
                            user: user
                        });
                    })
                    .catch((err) => {
                        res.status(500).json({
                            message: "something went wrong | internal server error",
                            error: err
                        });
                    })
            })
        })


    },

    // user signin controller function
    signin(req, res, next) {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                res.status(401).json({
                    message: "Invalid username or password error"
                });
            }
            if (!user) {
                res.status(401).json({
                    message: "Invalid username or password error"
                });
            } else {
                // jwt payload
                const palyload = {
                    _id: user._id
                }

                const token = jwt.sign(palyload, process.env.JWT_SECRET);
                // username and password matched

                res.status(200).json({
                    message: "Signin Successfull, Welcome back!",
                    token: token
                });
            }
        })(req, res, next);
    },

    // user logout controller function

    logout(req, res, next) {
        req.logout();
        res.status(200).json({
            message: "user successsfull logged out!"
        })
    },

    // route to check either username is available or not

    checkUsername(req, res, next) {
        let username = req.body.username;
        User.findOne({
                username: username
            })
            .then((user) => {
                if (!user) {
                    res.status(200).json({
                        message: "username is available.",
                        status: '200'
                    });
                } else {
                    res.status(200).json({
                        message: "username has already taken.",
                        status: '404'
                    });
                }
            })
            .catch((err) => {
                res.status(500).json({
                    message: "something went wrong | internal server error",
                    error: err
                });
            })
    },

    // route to check either email is available or not

    checkEmail(req, res, next) {
        let email = req.body.email;

        User.findOne({
                email: email
            })
            .then((user) => {
                if (!user) {
                    res.status(200).json({
                        message: "email is available for registration",
                        status: '200'

                    });
                } else {
                    res.status(200).json({
                        message: "email is already registered.",
                        status: '404'

                    });
                }
            })
            .catch((err) => {
                res.status(500).json({
                    message: "something went wrong | internal server error",
                    error: err
                });
            })
    }
}