const express = require('express');
const {registerStudents,getStudentsController, deleteStudent, updateStudent} = require('../controllers/studentController')

const studentRoute = express.Router();


studentRoute.route('/students').post(registerStudents);
studentRoute.route('/students').get(getStudentsController);
studentRoute.route('/students').delete(deleteStudent);
studentRoute.route('/students').put(updateStudent);


module.exports = studentRoute;



