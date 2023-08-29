const createHttpError = require('http-errors');

const Users = require('../models/users.model');
const { comparePasswordWithHash } = require('../lib/bcrypt');
const { createToken } = require('../lib/jwt');

const logIn = async ({ email, password }) => {
  const user = await Users.findOne({ email });

  if (!user) throw new createHttpError(401, 'Email or password invalids.');

  const passwordHash = user.password;

  const isValidPassword = comparePasswordWithHash(password, passwordHash);

  if (!isValidPassword)
    throw new createHttpError(401, 'Email or password invalids.');

  const userID = user._id;

  const token = createToken({ id: userID });

  return token;
};

module.exports = logIn;
