const express = require('express');
const router = express.Router();
const users = require('../usecases/users.usecases');

router.get('/', async (req, res) => {
  try {
    const titleFilter = request.query.title;
    const allUsers = await users.getAll(titleFilter);
    res.json({
      message: 'User-List',
      data: {
        users: allUsers,
      },
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: 'Something went wrong',
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await users.create(userData);
    res.status(201);
    res.json({
      message: 'User has been added :)',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    const status = error.name === 'ValidationError' ? 400 : 500;
    res.status(status);
    res.json({
      message: 'Something in the data is wrong, try again',
      error: error.message,
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await users.getById(id);
    res.json({
      message: `User ${id}`,
      data: { user },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      message: 'Wrong input data',
      error: error.message,
    });
  }
});

/* router.delete('/:id', async(req,res) => {
   try {
    const id = req.params.id;
    const userbyIDDeleted = await users.deleteByID(id);
    res.json({
        message: 'User deleted: ',
        data: {
            user: userbyIDDeleted,
        }
    })
   } catch (error) {
    res.status(error.status || 500);
    res.json({
        message: 'Something went wrong',
        error: error.message,
    })
   }
}) 

 router.patch('/:id', async(req,res) => {
   try {
    const { id } = req.params;
    const data = req.body;

    const userUpdated = await users.updateByID(id, data);

    res.json({
        message: "User updated",
        data: {
            user: userUpdated,
        }
    })
   } catch (error) {
    const status = error.name === 'ValidationError' ? 400 : 500
    res.status(error.status || status);
    res.json({
        message: "Something went wrong",
        error: error.message,
    });
   } 
}) */

module.exports = router;
