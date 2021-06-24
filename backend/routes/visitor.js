const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const VisitorDetail = mongoose.model('VisitorDetail');
const serverConfig = require('../config');
const requireToken = require('../middlewares/requireToken');

router.post('/admin/visitors/create', async(req, res) => {

    const { firstName, lastName, email, purpose, vaccinated, gender, address, inTime, phone } = req.body;
    console.log(inTime)
    try {
        const visitorDetail = new VisitorDetail({ firstName, lastName, email, purpose, vaccinated, gender, address, inTime, phone });
        await visitorDetail.save();
        // await visitorDetail.save(function (err) {
        //     if (err) {
        //         res.status(401)
        //     }
        //     console.log(visitorDetail)
        //     var visitorId = visitorDetail._id;
        //     res.status(200).send(visitorDetail);
        // });
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
        var visitorMap = [];
        visitors.forEach(function(visitors) {
            visitorMap.push(visitors);
            // visitorMap[visitor._id] = visitor;
        });
        console.log(visitorMap.length)
        res.send(visitorMap);
    })
})


module.exports = router;