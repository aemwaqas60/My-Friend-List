var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var friendsRouter = require('./routes/friends');
var authRouter = require('./routes/auth');

var app = express();

// require('./nodemon_config');

// mongoose connection
require('./config/mongodb_config');

// passport config
require('./helpers/passport')(passport);

// morgan middleware
app.use(logger('dev'));

app.use(cookieParser());

// express session middleware
app.use(session({
  secret: 'secret123',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// static folder path
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/friends', friendsRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
});

module.exports = app;