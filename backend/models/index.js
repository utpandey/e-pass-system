const mongoose = require('mongoose');
const serverConfig = require('../config');

module.exports = {
    connectionOptions: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    connectionUri: `mongodb+srv://${serverConfig.databaseUser}:${serverConfig.databasePass}@${serverConfig.databaseHost}/${serverConfig.databaseDb}?retryWrites=true&w=majority`,
    // connectionUri: `mongodb+srv://${serverConfig.databaseUser}:${serverConfig.databasePass}@${serverConfig.databaseHost}/${serverConfig.databaseDb}?retryWrites=true&w=majority`,
    // connectionUri: `mongodb+srv://user_test:<password>@cluster0.p6snc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
};