const mongoose = require('mongoose');
const User = require('../models/users.model')
const createError = require('http-errors');
const bcrypt = require ('../lib/bcrypt')


//Get all users listed

async function getAll(titleFilter) {
    const allUsers = await User.find();
    return allUsers;
}



module.exports = {
    getAll,
}