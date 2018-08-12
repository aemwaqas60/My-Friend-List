var express = require('express');
var router = express.Router();

const auth_middleware = require('../middlewares/auth');
const users_controller = require('../controllers/users')

module.exports = function () {

}   
/*  users routes. */
router.get('/', users_controller.getUsers);
router.get('/:userId', auth_middleware.veryfiyJwtToken, users_controller.getUser);
router.post('/addNewFriend', auth_middleware.veryfiyJwtToken, users_controller.addNewFriend);


module.exports = router;