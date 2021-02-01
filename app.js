const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const indexRouter = require('./routes/index');
const singleJobRouter = require('./routes/single-job');
const testAPIRouter = require("./routes/testAPI");
const hhRoute = require('./routes/hh');
const  searchKeywordRouter = require('./routes/search-keyword');
const citiesKeywordRouter = require('./routes/cities-keyword');
const coolRouter = require('./routes/cool');
const similarJobRouter = require('./routes/similar-job')
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/cool',coolRouter);
app.use('/code',similarJobRouter);
app.use('/city-keyword',citiesKeywordRouter)
app.use('/keyword',searchKeywordRouter)
app.use('/hh', hhRoute);
app.use('/page', indexRouter);
app.use('/id', singleJobRouter);
app.use("/testAPI", testAPIRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
