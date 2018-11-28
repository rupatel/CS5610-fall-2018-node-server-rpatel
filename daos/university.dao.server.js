const answerDao = require('./answer.dao.server');
const questionDao = require('./question.dao.server');
const studentDao = require('./student.dao.server');
const mongoose = require('mongoose');

const truncateDatabase = () => {
    answerDao.removeAll();
    questionDao.removeAll();
    studentDao.removeAll();
};
const populateDatabase = () => {
    studentDao.createStudent({
        _id: 123,
        type: 'STUDENT',
        username: 'alice',
        password: 'alice',
        firstName: 'Alice',
        lastName: 'Wonderland',
        gradYear: 2020,
        scholarship: 15000
    }).then(
        studentDao.createStudent({
            _id: 234,
            type: 'STUDENT',
            username: 'bob',
            password: 'bob',
            firstName: 'Bob',
            lastName: 'Hope',
            gradYear: 2021,
            scholarship: 12000
        })).then(
        questionDao.createQuestion({
            _id: 321,
            question: 'Is the following schema valid?',
            points: 10,
            questionType: 'TRUE_FALSE',
            trueFalse: {
                _id: 2,
                isTrue: false
            }
        })).then(
        questionDao.createQuestion({
            _id: 432,
            question: 'DAO stands for Dynamic Access Object.',
            points: 10,
            questionType: 'TRUE_FALSE',
            trueFalse: {
                _id: 1,
                isTrue: false
            }
        })).then(
        questionDao.createQuestion({
            _id: 543,
            question: 'What does JPA stand for?',
            points: 10,
            questionType: 'MULTIPLE_CHOICE',
            multipleChoice: {
                _id: 2,
                choices: 'Java Persistence API,Java Persisted Application,JavaScript ' +
                    'Persistence API,JSON Persistent Associations',
                correct: 1,
            },
        })).then(
        questionDao.createQuestion({
            _id: 654,
            question: 'What does ORM stand for?',
            points: 10,
            questionType: 'MULTIPLE_CHOICE',
            multipleChoice: {
                _id: 1,
                choices: 'Object Relational Model,Object Relative Markup,Object ' +
                    'Reflexive Model,Object Relational Mapping',
                correct: 4,
            },
        })).then(
        answerDao.answerQuestion(123, 321,
            {
                _id: 123,
                trueFalseAnswer: true
            }
        )
    ).then(
        answerDao.answerQuestion(123, 432,
            {
                _id: 234,
                trueFalseAnswer: false
            }
        )
    ).then(
        answerDao.answerQuestion(123, 543,
            {
                _id: 345,
                multipleChoiceAnswer: 1
            }
        )
    ).then(
        answerDao.answerQuestion(123, 654,
            {
                _id: 456,
                multipleChoiceAnswer: 2
            }
        )
    ).then(
        answerDao.answerQuestion(234, 321,
            {
                _id: 567,
                trueFalseAnswer: false
            }
        )
    ).then(
        answerDao.answerQuestion(234, 432,
            {
                _id: 678,
                trueFalseAnswer: true
            }
        )
    ).then(
        answerDao.answerQuestion(234, 543,
            {
                _id: 789,
                multipleChoiceAnswer: 3
            }
        )
    ).then(
        answerDao.answerQuestion(234, 654,
            {
                _id: 890,
                multipleChoiceAnswer: 4
            }
        )
    )
};

module.exports = {
    truncateDatabase,
    populateDatabase
};