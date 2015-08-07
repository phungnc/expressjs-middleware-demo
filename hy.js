var Hy = {
  talk: function(req, res, next) {
    if (req.query.user === 'Hy') { 
      console.log(">> Hy: %s", req.query.talk); 
      res.end('>> Hy: ', req.query.talk)
    } else {
      console.log(">> Hy: It's not me. Next ->");
      next();
    }
  }
};

module.exports = Hy;