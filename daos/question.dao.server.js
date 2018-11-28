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
    questionModel.deleteMany({ },function (err) {
        if(err)
            console.log(err);
        else
            console.log('removed all answers');
    });
};
module.exports = {
    findQuestionById,
    findAllQuestions,
    createQuestion,
    removeAll
};