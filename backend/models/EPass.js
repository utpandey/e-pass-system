const mongoose = require('mongoose');

const ePassSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true,
    },
    // employee: { type: Schema.Types.ObjectId, ref: 'Employee' },
    purpose: {
        type: String,
        required: true
    },
    vaccinated: {
        type: Boolean,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    inTime: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }

})

mongoose.model('EPass', ePassSchema);

// module.exports = ePassSchema;