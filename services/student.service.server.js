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
        studentDao.findStudentById(req.params['id']).
        then(student => res.send(student))
    };
    updateStudent = (req,res) => {
        studentDao.updateStudent(req.params['id'],req.body).
        then(result => res.send(result))
    };
    delteStudent = (req,res) => {
        studentDao.deleteStudent(req.params['id']).
        then(result => res.send(result))
    };
    app.post('/api/student',createStudent);
    app.get('/api/student',findAllStudent);
    app.get('/api/student/:id',findStudentById);
    app.put('/api/student/:id',updateStudent);
    app.delete('/api/student/:id',delteStudent);
};