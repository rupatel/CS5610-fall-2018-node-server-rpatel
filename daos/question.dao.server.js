const questionModel = require('../data/models/question.model.server');
const createQuestion = question => {
    return questionModel.create(question);
};

const findQuestionById= qId => {
    return questionModel.find({_id:qId});
};
const findAllQuestions= () => {
    return questionModel.find();
};
const removeAll = () => {
    return questionModel.deleteMany({ }).exec();
};
module.exports = {
    findQuestionById,
    findAllQuestions,
    createQuestion,
    removeAll
};