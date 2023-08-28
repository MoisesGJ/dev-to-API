const mongoose = require('mongoose');
const User = require('../models/users.model')
const createError = require('http-errors');
const bcrypt = require ('../lib/bcrypt')


//Get all users listed
async function getAll(titleFilter) {
    const allUsers = await User.find();
    return allUsers;
};

// Create a new user 
async function create(userData) {
    const existingUser = await User.findOne({ email: userData.email});
    if (existingUser) {
        throw new createError(412, 'Email ya usado')
    };

    const passwordRexex = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
    );
    if (!passwordRexex.text(userData.password)) {
        throw new createError(400, 'Passwrod too weak')
    };

    userData.password = bcrypt.encryptPassword(userData.password);

    const newUser = await User.create(userData);
    return newUser;
}



module.exports = {
    getAll,
}