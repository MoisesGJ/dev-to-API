const { sign, verify } = require('jsonwebtoken');

const SECRET_WORD = process.env.JWT_SECRET;

const createToken = (payload) =>
  sign(payload, SECRET_WORD, { expiresIn: '1d' });

const verifyToken = (token) => verify(token, SECRET_WORD);

module.exports = { createToken, verifyToken };
