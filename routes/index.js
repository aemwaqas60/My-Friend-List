var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', (req, res, next) => {
 return  res.sendFile((path.join(__dirname, '/../public/dist/index.html')));
});
module.exports = router;