const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const serverConfig = require('../config');
const requireToken = require('../middlewares/requireToken');

// admin signin
router.post('/admin/signin', async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'Must provide email or password' });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(422).send({ error: 'Must provide email or password' });
    }

    try {
        if (user.role === 'admin') {
            await user.comparePassword(password);
            const token = jwt.sign({ userId: user._id }, serverConfig.jwtKey);
            res.send({ token });
        } else {
            res.status(401).send('Please sign in with the admin credentials!');
        }
    } catch (err) {
        console.log(err);
        return res.send({ error: 'Must provide email or password' }).status(422);
    }
});

// admin adding an employee
router.post('/admin/employees/add', async(req, res) => {
    const { email, password } = req.body;

    try {
        const employee = new User({ email, password });
        await employee.save();
        // const token = jwt.sign({ employeeId: employee._id }, serverConfig.jwtKey);
        // res.send({ token });
    } catch (err) {
        res.status(422).send(err.message);
        console.log(err);
    }
});

// employee signing in (from the native app)
router.post('/user/signin', async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'Must provide email or password' });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(422).send({ error: 'Must provide email or password' });
    }

    try {
        if (user.role === 'employee') {
            await user.comparePassword(password);
            const token = jwt.sign({ userId: user._id }, serverConfig.jwtKey);
            var role = user.role;
            var employeeId = user._id;
            res.send({ token, role, employeeId });
        } else {
            res.status(401).send('Please sign in with correct credentials!');
        }
    } catch (err) {
        console.log(err);
        return res.status(422).send({ error: 'Must provide email or password' });
    }
});

// admin queries all the employee
router.get('/admin/employees/all', (req, res) => {
    User.find({ role: 'employee' }, function(err, employees) {
        if (err) {
            res.send(err.message);
        }
        var employeesMap = [];
        employees.forEach(function(employee) {
            employeesMap.push(employee);
            // employeesMap[employee._id] = employee;
        });
        console.log(employeesMap)
        res.send(employeesMap);
    });
});

router.get('/', requireToken, (req, res) => {
    res.send({ email: req.employee.email });
});

module.exports = router;