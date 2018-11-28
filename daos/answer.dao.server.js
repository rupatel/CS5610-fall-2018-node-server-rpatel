const answerModel = require('../data/models/answer.model.server');
const mongoose = require('mongoose');
const answerQuestion = (studentId, questionId, answer) => {
    answer.student = studentId;
    answer.question = questionId;
    return answerModel.create(answer);
};

const findAnswerById = id => {
    return answerModel.findOne({_id:id}).exec();
};
const findAnswersByQuestion = qId => {
    return answerModel.find({question:qId}).exec();
};
const findAnswersByStudent = studentId => {
    return answerModel.find({student:studentId}).exec();
};
const findAllAnswers = () => {
    return answerModel.find();
};

const findAnswerByStudentAndQuestion = (sid,qid) => {
    return answerModel.find({question:qid,student:sid});
};

const removeAll = () => {
    return answerModel.deleteMany({ }).exec();
};
module.exports = {
    findAnswerById,
    findAnswersByQuestion,
    findAnswersByStudent,
    findAllAnswers,
    answerQuestion,
    removeAll,
    findAnswerByStudentAndQuestion
};