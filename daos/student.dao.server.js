const studentModel = require('../data/models/student.model.server');
const createStudent = student => {
    return studentModel.create(student);
};
const findAllStudents = () => {
    return studentModel.find().exec();
};
const findStudentById= id => {
    return studentModel.findOne({_id:id}).exec();
};
const removeAll = () => {
    return studentModel.deleteMany({ }).exec();
};

const updateStudent = (id,student) => {
    return studentModel.updateOne({_id:id},{$set:student}).exec()
};
const deleteStudent = (id) => {
    return studentModel.deleteOne({_id:id}).exec();
};
module.exports = {
    findAllStudents,
    findStudentById,
    createStudent,
    removeAll,
    updateStudent,
    deleteStudent
};

