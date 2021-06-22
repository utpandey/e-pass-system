const express = require('express');
const app = express()
const cors = require('cors')
const serverConfig = require('./config');
const mongoose = require('mongoose');
const server = require('./models');
require('./models/User');
require('./models/VisitorDetail');
require('./models/EPass');
const authRoutes = require('./routes/employee');
const visitorRoutes = require('./routes/visitor');
const ePassRoutes = require('./routes/epass');

const userSchema = require('./models/User');

mongoose.connect(server.connectionUri, server.connectionOptions)
    .then(() => console.log('Connection to database has been established'))
    .catch((error) => console.log('Connection could not be established', error));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(authRoutes)
app.use(visitorRoutes);
app.use(ePassRoutes);

mongoose.connection.on('connected', () => {
    console.log("connected to mongo")
})
mongoose.connection.on('error', (err) => {
    console.log("This is error", err)
})

app.listen(serverConfig.port, () => {
    console.log("Server running: " + serverConfig.port)
})