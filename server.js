var express = require('express');
const bodyParser = require('body-parser');
const universityDao = require('./daos/university.dao.server');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./data/db')();

const universityService = require('./services/university.service.server')(app);
const questionService = require('./services/question.service.server')(app);
const answerService = require('./services/answer.service.server')(app);
const studentService = require('./services/student.service.server')(app);

app.listen(process.env.PORT || 5000)