var userModel = require('../model/user.js');

var User = {
  isExist: function(req, res, next) {
    var user = userModel.findUser(req.query.user);
    if(user === undefined) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  },
  talk: function(req, res, next) {
      console.log(">> %s: %s", req.query.user, req.query.talk); 
      res.end('>> ' + req.query.user + ': ' + req.query.talk);
  }
};

module.exports = User;