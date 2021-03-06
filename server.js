var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./data/db')();

const universityService = require('./services/university.service.server')(app);
const questionService = require('./services/question.service.server')(app);
const answerService = require('./services/answer.service.server')(app);
const studentService = require('./services/student.service.server')(app);

app.get('/',(req,res) => res.send('Welcome to A8'));
app.listen(process.env.PORT || 5000);