const User = require('../models/user');

module.exports = {

    getUsers(req, res, next) {
        User.find({})
            .then((users) => {
                if (!users) {
                    res.status(404).json({
                        message: "something went wrong | internal server error occured",
                    });
                } else {
                    res.status(200).json({
                        message: "users data found successfully!",
                        users: users
                    })
                }
            })
            .catch((err) => {
                res.status(500).json({
                    message: "something went wrong | internal server error occured",
                    error: err
                })

            })
    },
    getUser(req, res, next) {

        let userId = req.params.userId;
        User.findOne({
                _id: userId
            })
            .then((user) => {
                if (!user) {
                    res.status(404).json({
                        message: "something went wrong | internal server error occured",
                    });
                } else {
                    res.status(200).json({
                        message: "user data found successfully!",
                        user: user
                    })
                }
            })
            .catch((err) => {
                res.status(500).json({
                    message: "something went wrong | internal server error occured",
                    error: err
                })

            })
    },
    addNewFriend(req, res, next) {
        console.log("==========Add New Friend controller============");

        User.findByIdAndUpdate({
                _id: req._id
            }, {
                $push: {
                    friends: req.body.friend_id
                }
            }, {
                new: true
            })
            .then((user) => {
                res.status(200).json({
                    message: "friend has added successfully"
                });
            })
            .catch((err) => {

                res.status(500).json({
                    messag: "something went wrong | internal server error",
                    error: err
                });

            })

    }
}