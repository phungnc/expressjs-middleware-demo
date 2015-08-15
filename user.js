require('array.prototype.find');

var userData = [
  {
    id: 1,
    name: "Ho"
  },
  {
    id: 2,
    name: "Dat"
  },
  {
    id: 3,
    name: "Hy"
  }
];

function findUser(name) {
  return userData.find(function (user) {
    return user.name == name;
  });
}

var User = {
  isExist: function(req, res, next) {
    var user = findUser(req.query.user);
    if( user === undefined) {
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