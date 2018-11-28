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
    return studentModel.deleteMany({ }).exec();
};
module.exports = {
    findAllStudents,
    findStudentById,
    createStudent,
    removeAll
};

