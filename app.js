var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

var Ho = function(req, res, next) {
  if (req.query.user === 'Ho') { 
    console.log(">> Ho: Yes Sir!"); 
    res.end('>> Ho: Yes Sir!')
  } else next();
}
var Dat = function(req, res, next) {
  if (req.query.user === 'Dat') {
    console.log(">> Dat: Yes Sir!"); 
    res.end('>> Dat: Yes Sir!')
  } else next();
}
var Hy = function(req, res, next) {
  if (req.query.user === 'Hy') {
    console.log(">> Hy: Yes Sir!"); 
    res.end('>> Hy: Yes Sir!')
  } else {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
}

app.use('/php', Ho, Dat, Hy);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.message);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
