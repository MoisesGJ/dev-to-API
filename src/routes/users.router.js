const express = require('express')
const router = express.Router();
const users = require('../usecases/users.usecases')

router.get('/', async (req, res) => {
    try {
      const titleFilter = request.query.title;
      const allUsers = await users.getAll(titleFilter)
      res.json({
        message: 'User-List',
        data: {
            users: allUsers
        }
      })
    } catch (error) {
        res.status(500);
        res.json({
            message: 'Something went wrong'
        })
    }
});


router.post('/', async(req,res) => {
    try{
      const userData = req.body;
      const newUser = await users.create(userData);
      res.status(201);
      res.json({
        message: 'User has been added :)',
        data: {
            user: newUser,
        }
      })
    } catch (error) {
        const status = error.name === 'ValidationError' ? 400 : 500
        res.status(status);
        res.json ({
            message: 'Something in the data is wrong, try again',
            error: error.message,
        })
    }
})


module.exports = router;
