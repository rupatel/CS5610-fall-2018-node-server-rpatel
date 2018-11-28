var express = require('express');
const bodyParser = require('body-parser');
const universityDao = require('./daos/university.dao.server');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello',(req,res) => {
    res.send('hello world')
});

require('./data/db')();

universityDao.truncateDatabase();
//universityDao.populateDatabase();
app.listen(3000);