const User = require('../models/user');
module.exports = {

    getFriendList(req, res, next) {

        console.log("==========Get Friend List Controller ===============");

        User.findOne({
                _id: req._id
            })
            .populate("friends", "username email created_date")
            .then((user) => {
                if (!user) {
                    res.status(404).json({
                        message: "something went wrong | internal server error occured",
                    });
                } else {
                    res.status(200).json({
                        message: "user data found successfully!",
                        friends: user
                    })
                }
            })
            .catch((err) => {
                res.status(500).json({
                    message: "something went wrong | internal server error occured",
                    error: err
                });
            })
    },



}