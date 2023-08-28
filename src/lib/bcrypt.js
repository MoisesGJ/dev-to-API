const { hashSync, compareSync } = require('bcrypt');

const rounds = 12;

const encryptPassword = (password) => hashSync(password, rounds);

const comparePasswordWithHash = (password, hash) => compareSync(password, hash);

module.exports = { encryptPassword, comparePasswordWithHash };
