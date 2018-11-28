const answerDao = require('../daos/answer.dao.server');
module.exports = app => {

    createAnswer = (req,res) => {
        answerDao.answerQuestion(req.params['sid'],req.params['qid'],req.body).then(
            answer => res.send(answer)
        )
    };
    findAnswerByStudentAndQuestion = (req,res) => {
        answerDao.findAnswerByStudentAndQuestion(req.params['sid'],req.params['qid']).then(
            answers => res.send(answers)
        )
    };


    findAllAnswer = (req,res) => {
        answerDao.findAllAnswers().then(
            answers => res.send(answers)
        )
    };
    findAnswerById = (req,res) => {
        answerDao.findAnswerById(req.params['id']).then(
            answer => res.send(answer)
        )
    };
    findAnswersByStudent = (req,res) => {
        answerDao.findAnswersByStudent(req.params['sid']).then(
            answers => res.send(answers)
        )
    };
    findAnswersByQuestion = (req,res) => {
        answerDao.findAnswersByQuestion(req.params['qid']).then(
            answers => res.send(answers)
        )
    };
    app.post('/api/student/:sid/question/:qid/answer',createAnswer);
    app.get('/api/student/:sid/question/:qid/answer',findAnswerByStudentAndQuestion);
    app.get('/api/question/:qid/student/:sid/answer',findAnswerByStudentAndQuestion);


    app.get('/api/answer',findAllAnswer);
    app.get('/api/answer/:id',findAnswerById);
    app.get('/api/student/:sid/answer',findAnswersByStudent);
    app.get('/api/question/:qid/answer',findAnswersByQuestion);
};