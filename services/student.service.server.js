const studentDao = require('../daos/student.dao.server');
module.exports = app => {
    createStudent = (req,res) => {
        studentDao.createStudent(req.body).then(
            student => res.send(student)
        )
    };
    findAllStudent = (req,res) => {
        studentDao.findAllStudents().then(students => res.send(students))
    };
    findStudentById = (req,res) => {
        const student = studentDao.findStudentById(req.params['id']).
        then(student => res.send(student))
    };
    app.post('/api/student',createStudent);
    app.get('/api/student',findAllStudent);
    app.get('/api/student/:id',findStudentById)
};