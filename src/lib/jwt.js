const { sign, verify } = require('jsonwebtoken');

const SECRET_WORD = process.env.JWT_SECRET;

const createToken = (payload) =>
  sign(payload, SECRET_WORD, { expiresIn: '1d' });

const verifyToken = (token) =>
  verify(token, SECRET_WORD, function (err) {
    if (err) {
      console.log(err);
      return false;
    }
    return true;
  });

module.exports = { createToken, verifyToken };
