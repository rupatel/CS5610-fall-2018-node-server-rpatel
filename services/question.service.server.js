const answerDao = require('../daos/question.dao.server');
module.exports = app => {
    const createQuestion = (req,res) => {
        answerDao.createQuestion(req.body).then(
            q => res.send(q)
        );
    };
    const findAllQuestion = (req,res) => {
        answerDao.findAllQuestions().then(
            questions => res.send(questions)
        );
    };
    const findQuestionById = (req,res) => {
        answerDao.findQuestionById(req.params['id']).then(
            q => res.send(q)
        )
    };
    updateQuestion = (req,res) => {
        answerDao.updateQuestion(req.params['id'],req.body).
        then(result =>
            res.send(result))
    };
    delteQuestion = (req,res) => {
        answerDao.deleteQuestion(req.params['id']).
        then(result => res.send(result))
    };
    app.post('/api/question',createQuestion);
    app.get('/api/question',findAllQuestion);
    app.get('/api/question/:id',findQuestionById);
    app.put('/api/question/:id',updateQuestion);
    app.delete('/api/question/:id',delteQuestion);
};