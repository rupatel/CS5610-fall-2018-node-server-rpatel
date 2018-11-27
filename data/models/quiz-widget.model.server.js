const mongoose = require('mongoose');
const questionWidgetSchema = require('./quiz-widget.schema.server');
const quizWidgetModelServer = mongoose.model('QuizWidgetModel',questionWidgetSchema);
module.exports = quizWidgetModelServer;