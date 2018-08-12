const jwt = require('jsonwebtoken');

module.exports = {
    isLoggedin(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.status(401).json({
                message: "Unauthorized request.",
                user: req.user
            })
        }
    },

    veryfiyJwtToken(req, res, next) {

        if (!req.headers.authorization) {
            res.status(401).json({
                message: "Unauthorizated Request | Invalid token"
            });
        }
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

            if (err) {
                res.status(401).json({
                    message: "Unauthorizated Request | Invalid token"
                });
            }
            if (!decoded) {
                res.status(401).json({
                    message: "Unauthorizated Request | Invalid token"
                });
            }

            req._id = decoded._id;
            next();
        });
    }
}