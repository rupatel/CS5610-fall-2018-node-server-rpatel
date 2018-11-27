module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard';
    var connectionStr = 'mongodb://localhost/';
    connectionStr += databaseName;
    mongoose.connect(connectionStr)
};