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
        required: true,
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
        type: String,
        required: true
    },
    outTime: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})

visitorDetailSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next()
    }
    bcrypt, bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next()
        })
    })
})

visitorDetailSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            }
            if (!isMatch) {
                return reject(err);
            }
            resolve(true);
        })
    })
}

mongoose.model('VisitorDetail', visitorDetailSchema);