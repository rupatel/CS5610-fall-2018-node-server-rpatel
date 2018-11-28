const universityDao = require('../daos/university.dao.server');
module.exports = app => {
     populateDatabase = (req,res) => {
         universityDao.populateDatabase().then(
            res.send(true)
         )
     };
    truncateDatabase = (req,res) => {
        universityDao.truncateDatabase().then(
            res.send(true)
        )
    };
    app.post('/api/populate',populateDatabase);
    app.delete('/api/all',truncateDatabase);
};