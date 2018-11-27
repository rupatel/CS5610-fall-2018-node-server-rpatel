const mongoose = require('mongoose');
const TrueFalseSchema = mongoose.Schema({
    _id:Number,
    isTrue:Boolean
});
module.exports = TrueFalseSchema;