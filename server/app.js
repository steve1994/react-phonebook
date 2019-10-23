var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/phonebook');
var cors = require('cors')

var app = express();
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/react-phonebook-db', {useNewUrlParser: true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/phonebooks/', usersRouter);

module.exports = app;
