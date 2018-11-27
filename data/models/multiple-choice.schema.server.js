const mongoose = require('mongoose');
const MultipleChoiceSchema = mongoose.Schema({
    _id:Number,
    choices:String,
    correct:Number,
});
module.exports = MultipleChoiceSchema;