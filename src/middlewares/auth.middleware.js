const createHttpError = require('http-errors');

const { verify } = require('../lib/jwt');

const auth = (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    if (!auth) throw new createHttpError(401, 'Token required');

    const token = auth.split('Bearer ', '');

    const payload = verify(token);

    if (!payload) throw new createHttpError(401, 'Could not verify token');

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: 'Unauthorized', error: err.message });
  }
};

module.exports = auth;
