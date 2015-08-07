var Ho = {
  talk: function(req, res, next) {
    if (req.query.user === 'Ho') { 
      console.log(">> Ho: %s", req.query.talk); 
      res.end('>> Ho: ', req.query.talk)
    } else {
      console.log(">> Ho: It's not me. Next ->");
      next();
    }
  }
};

module.exports = Ho;