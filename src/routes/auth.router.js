const { Router } = require('express');

const logIn = require('../usecases/auth.usecases');

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const credentials = req.body;

    const token = await logIn(credentials);

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.log(err);
    res.status(500 || err.status).json({
      message: 'Something went wrong',
      error: err.message,
    });
  }
});

module.exports = router;
