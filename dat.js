var Dat = {
  talk: function(req, res, next) {
    if (req.query.user === 'Dat') { 
      console.log(">> Dat: %s", req.query.talk); 
      res.end('>> Dat: ', req.query.talk)
    } else {
      console.log(">> Dat: It's not me. Next ->");
      next();
    }
  }
};

module.exports = Dat;