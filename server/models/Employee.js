const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;