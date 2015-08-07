var express = require('express');
var router = express.Router();
var users = require('../controllers/users.js');

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

router.get('/php', users.isExist, users.talk);

module.exports = router;
