const mongoose = require('mongoose');
const questionWidgetSchema = mongoose.Schema({
    _id:Number,
    questions: [{
        type: Number,
        ref: 'QuestionModel'
    }]
}, {collection: 'question-widgets'});
module.exports=questionWidgetSchema;