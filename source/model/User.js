const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        minlength: 3,
        unique: false,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 20
    },
    phone: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    role: {
        type: String,
        default: false,
    },
    isUser: {
        type: Boolean,
        default: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const userModel = model('users', userSchema)

module.exports = userModel;