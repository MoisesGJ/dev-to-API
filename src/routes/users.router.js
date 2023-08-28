const express = require('express')
const router = express.Router();
const users = require('../usecases/users.usecases')

router.get('/', auth, async (req, res) => {
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



module.exports = router;
