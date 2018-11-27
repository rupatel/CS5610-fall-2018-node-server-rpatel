const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema({
    _id:Number,
    type:{type:String,enum:['FACULTY','STUDENT']},
    username:String,
    password:String,
    firstName:String,
    lastName:String,
    gradYear:Number,
    scholarship:Number
},{collection:'students'});
module.exports = StudentSchema;