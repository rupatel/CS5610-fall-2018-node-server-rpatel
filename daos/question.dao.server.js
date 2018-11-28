const questionModel = require('../data/models/question.model.server');
const createQuestion = question => {
    return questionModel.create(question);
};

const findQuestionById= qId => {
    return questionModel.findOne({_id:qId}).exec();
};
const findAllQuestions= () => {
    return questionModel.find().exec();
};
const removeAll = () => {
    return questionModel.deleteMany({ }).exec();
};
const u = () => {
    return questionModel.deleteMany({ }).exec();
};
const updateQuestion = (id,question) => {
    return questionModel.updateOne({_id:id},{$set:question}).exec()
};
const deleteQuestion = (id) => {
    return questionModel.deleteOne({_id:id}).exec();
};
module.exports = {
    findQuestionById,
    findAllQuestions,
    createQuestion,
    removeAll,
    updateQuestion,
    deleteQuestion
};