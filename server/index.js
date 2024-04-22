const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const bcrypt = require('bcrypt');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employee');

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            EmployeeModel.create({ username, email, password: hash })
                .then((employees) => {
                    res.json(employees)
                })
                .catch((err) => {
                    res.status(400).json(err)
                })
        })
        .catch(err => console.log(err.message))
})


app.post('/login', (req, res) => {

    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        res.json("Success Login")
                    }
                    else {
                        res.json("Wrong password")
                    }
                })
            } else {
                res.json("User does not exist")
            }
        })
        .catch(err => console.log(err.message))
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});