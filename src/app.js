//Requires
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

//Use!!!
app.use(express.static(path.join(__dirname, '../public')));  
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
var userLogs = require('./middlewares/userLogs')

//Seteo de vistas

app.set('view engine', 'ejs');
app.set('views', './src/views');


//App Use
app.use(userLogs);
const mainRouter = require('./routes/main');
app.use('/', mainRouter);


//ERROR HANDLER Y CATCH 404
app.use((req, res, next) => next(createError(404)));

//error handler 
app.use((err, req, res, next) => {
  //Seteo de locales, solo dando error en el caso de desarrollo.
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

// render error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
