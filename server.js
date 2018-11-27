var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello',(req,res) => {
    res.send('hello world')
});

require('./data/db')();

app.listen(3000);