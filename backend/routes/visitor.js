const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const VisitorDetail = mongoose.model('VisitorDetail');
const serverConfig = require('../config');
const requireToken = require('../middlewares/requireToken');

router.post('/admin/visitors/create', async(req, res) => {

    const { firstName, lastName, email, purpose, vaccinated, gender, address, inTime, outTime, phone } = req.body;

    try {
        const visitorDetail = new VisitorDetail({ firstName, lastName, email, purpose, vaccinated, gender, address, inTime, outTime, phone });
        await visitorDetail.save(function(err, visitor) {
            if (err) {
                res.send(err.message)
            }
            var visitorId = visitor._id;
            res.status(200).send(visitorId);
        });
        // res.status(200).send({ visitorId: req.visitorDetail._id });
    } catch (err) {
        res.status(422).send(err.message)
        console.log(err);
    }

})

router.post('/employee/signin', async(req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: "Must provide email or password" })
    }
    const employee = await VisitorDetail.findOne({ email })
    if (!employee) {
        return res.status(422).send({ error: "Must provide email or password" })
    }

    try {
        await employee.comparePassword(password)
        const token = jwt.sign({ employeeId: employee._id }, serverConfig.jwtKey)
        res.send({ token })
    } catch (err) {
        console.log(err);
        return res.status(422).send({ error: "Must provide email or password" })
    }

})


router.get('/admin/visitors/all', (req, res) => {
    VisitorDetail.find({}, function(err, visitors) {
            var visitorMap = {};
            visitors.forEach(function(visitor) {
                visitorMap[visitor._id] = visitor;
            });
            res.send(visitorMap);
        })
        // res.send({ email: req.employee.email })
})


module.exports = router;