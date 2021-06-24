const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const EPass = mongoose.model('EPass');
const User = mongoose.model('User');
const serverConfig = require('../config');
const requireToken = require('../middlewares/requireToken');

// creating an epass
router.post('/employee/epass/create', async(req, res) => {

    const { employeeId, purpose, vaccinated, address, inTime, phone } = req.body;

    try {
        const epass = new EPass({ employeeId, purpose, vaccinated, address, inTime, phone });
        await epass.save(function(err, ePass) {
            if (err) {
                res.status(401);
            }
            var ePassId = epass._id;
            console.log(epass.address)
            res.send(ePassId).status(200);
        });
    } catch (err) {
        res.status(422).send(err.message)
        console.log(err);
    }

})

// send epass id to respective employee
router.post('/employee/send/epassId', async(req, res) => {

    const { ePassId, employeeId } = req.body;
    console.log(ePassId)
    try {
        User.findOneAndUpdate({ _id: employeeId }, { $push: { epassIds: ePassId } },
            function(error, success) {
                if (error) {
                    console.log(error);
                } else {
                    res.status(200);
                    res.send(success);
                    // console.log(success);
                }
            });
    } catch (err) {
        res.status(422).send(err.message)
        console.log(err);
    }

})

module.exports = router;