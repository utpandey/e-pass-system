const mongoose = require('mongoose');

const visitorDetailSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    vaccinated: {
        type: Boolean,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    inTime: {
        hr: {
            type: String,
            required: true
        },
        min: {
            type: String,
            required: true
        }
    },
    phone: {
        type: Number,
        required: true
    }
});

mongoose.model('VisitorDetail', visitorDetailSchema);