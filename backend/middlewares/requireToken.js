const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const serverConfig = require('../config');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // authorization === Bearer qwerty
    if (!authorization) {
        return res.status(401), send({ error: "you must be logged in!" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, serverConfig.jwtKey, async(err, payload) => {
        if (err) {
            return res.status(401).send({ error: "you must be logged in!" })
        }
        const { employeeId } = payload
        const employee = await User.findById(employeeId)
        req.employee = employee
        next()
    })
}