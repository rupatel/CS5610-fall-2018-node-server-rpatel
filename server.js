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

universityDao.truncateDatabase().then((res,rej) =>{
    console.log('database truncated...');
    universityDao.populateDatabase().then(
        console.log('database populated...')
    )
}
);
app.listen(3000);