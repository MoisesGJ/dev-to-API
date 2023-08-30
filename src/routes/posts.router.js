const { Router } = require('express');
const posts = require('../usecases/posts.usecases');
const auth = require('../middlewares/auth.middleware');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const idFilter = req.query.search;
    const allPosts = await posts.getAll(idFilter);

    res.json({
      message: 'post',
      posts: {
        allPosts,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      error: error.message,
    });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const postData = req.body;
    const newPost = await posts.create(postData);

    res.status(201).json({
      message: 'Post created successfully',
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    const status = error.name === 'ValidationError' ? 400 : 500;
    res.status(error.status || status);
    res.json({
      message: 'Error creating post',
      error: error.message,
    });
  }
});

router.patch('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;

    const postUpdate = await posts.updateById(id, dataToUpdate);

    res.json({
      message: 'Post update successful',
      data: {
        post: postUpdate,
      },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: 'something went wrong',
      error: error.message,
    });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const autho = req.headers.authorization;
    const token = autho.replace('Bearer ', '');
    const dataId = token.split('.');
    const payload = JSON.parse(atob(dataId[1]));
    const userId = payload.id;

    console.log('por aqui pase');
    const { id } = req.params;
    const postDeleted = await posts.deleteById(id, userId);

    res.json({
      message: 'Post deleted successfully',
      data: {
        post: postDeleted,
      },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: 'Something went wrong',
      error: error.message,
    });
  }
});
module.exports = router;
