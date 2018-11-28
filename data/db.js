module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard';
    // var connectionStr = 'mongodb://localhost/';
    // connectionStr += databaseName;
    var connectionStr = process.env.MONGODB_URI;
    mongoose.connect(connectionStr)
};