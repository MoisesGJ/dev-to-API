const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true,
    },
    lastname: {
        type: String,
        required: true, 
        minlength: 2,
        maxlength: 50,
        trim: true,
    },
    email: {
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        default: new Date(),
    }
})