const createHttpError = require('http-errors');

const Users = require('../models/users.model');
const { compareSync } = require('../lib/bcrypt');
const { sign } = require('../lib/jwt');

const logIn = async ({ email, password }) => {
  const user = await Users.findOne({ email });

  if (!user) throw new createHttpError(401, 'Email or password invalids.');

  const passwordHash = user.password;

  const isValidPassword = compareSync(password, passwordHash);

  if (!isValidPassword)
    throw new createHttpError(401, 'Email or password invalids.');

  const userID = user.__id;

  const token = sign({ id: userID });

  return token;
};
