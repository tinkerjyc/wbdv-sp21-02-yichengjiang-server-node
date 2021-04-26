const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard',
                 {useNewUrlParser: true, useUnifiedTopology: true});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

// const quizzesControllers = require('./controllers/quizzes-controller')
// quizzesControllers(app)

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)

app.listen(4000)