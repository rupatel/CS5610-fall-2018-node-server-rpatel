const studentModel = require('../data/models/student.model.server');
const createStudent = student => {
    return studentModel.create(student);
};
const findAllStudents = () => {
    return studentModel.find();
};
const findStudentById= id => {
    return studentModel.find({_id:id});
};
const removeAll = () => {
    studentModel.deleteMany({ },function (err) {
        if(err)
            console.log(err);
        else
            console.log('removed all students');
    });
};
module.exports = {
    findAllStudents,
    findStudentById,
    createStudent,
    removeAll
};

