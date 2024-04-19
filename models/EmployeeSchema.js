const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    employeeId:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
});

module.exports = mongoose.model('Employees',EmployeeSchema);