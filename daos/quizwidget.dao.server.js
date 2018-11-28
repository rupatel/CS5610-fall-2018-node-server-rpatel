const quizWidgetModel = require('../data/models/quiz-widget.model.server');
const createQuizWidget = (quizWidget) => {
    return quizWidgetModel.create(quizWidget);
};
const removeAll = () => {
    return quizWidgetModel.deleteMany({ }).exec();
};
module.exports = {
    createQuizWidget,
    removeAll
};