const answerModel = require('../data/models/answer.model.server');
const mongoose = require('mongoose');
const answerQuestion = (studentId, questionId, answer) => {
    answerModel.create({
        _id: answer._id,
        trueFalseAnswer: answer.trueFalseAnswer,
        multipleChoiceAnswer: answer.multipleChoiceAnswer,
        student: studentId,
        question: questionId
    });
};

const findAnswerById = id => {
    return answerModel.find({_id:id});
};
const findAnswersByQuestion = qId => {
    return answerModel.find({question:qId});
};
const findAnswersByStudent = studentId => {
    return answerModel.find({student:studentId});
};
const findAllAnswers = () => {
    return answerModel.find();
};
const removeAll = () => {
    answerModel.deleteMany({ },function (err) {
        if(err)
            console.log(err);
        else
            console.log('removed all answers');
    });
};
module.exports = {
    findAnswerById,
    findAnswersByQuestion,
    findAnswersByStudent,
    findAllAnswers,
    answerQuestion,
    removeAll
};