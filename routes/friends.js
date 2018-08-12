var express = require('express');
var router = express.Router();

const auth_middleware = require('../middlewares/auth');
const friends_controller = require('../controllers/friends');

module.exports = function () {

}
/*  users routes. */
router.get('/', auth_middleware.veryfiyJwtToken, friends_controller.getFriendList);


module.exports = router;