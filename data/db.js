module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard';
    // var connectionStr = 'mongodb://localhost/';
    // connectionStr += databaseName;
    var connectionStr = process.env.MONGODB_URI;
    console.log(connectionStr+'<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    mongoose.connect('mongodb://heroku_ml4vk7x3:i9pge9lp9509lg7epcv0mmd9oi@ds129966.mlab.com:29966/heroku_ml4vk7x3');
}