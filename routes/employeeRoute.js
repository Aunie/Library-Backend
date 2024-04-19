const express = require('express');
const {registerEmployee,getEmployeeList, deleteEmployee, updateEmployee} = require('../controllers/EmployeeController')
const employeeRoute = express.Router();


employeeRoute.route('/employee').post(registerEmployee);
employeeRoute.route('/employee').get(getEmployeeList);
employeeRoute.route('/employee').delete(deleteEmployee);
employeeRoute.route('/employee').put(updateEmployee);

module.exports = employeeRoute;



