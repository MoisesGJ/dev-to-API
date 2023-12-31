const mongoose = require('mongoose');
const Post = require('../models/posts.model');
const User = require('../models/users.model');
const createError = require('http-errors');

async function getAll(titleFilter, idFilter) {
  const filters = {};

  if (titleFilter) {
    filters.title = new RegExp(titleFilter, 'i');
    console.log(filters);
  }
  if (idFilter) {
    if (!mongoose.isValidObjectId(idFilter)) {
      throw new createError(404, 'Post not found');
    }
    filters._id = idFilter;
  }

  return await Post.find(filters).populate('user');
}

async function create(postData) {
  if (!mongoose.isValidObjectId(postData.user)) {
    throw new createError(400, 'Invalid user Id');
  }
  const user = await User.findById(postData.user);
  if (!user) {
    throw new createError(404, 'User not found');
  }

  return Post.create(postData);
}

async function deleteById(id, userId) {
  if (!mongoose.isValidObjectId(id)) {
    throw new createError(400, 'Invalid post id');
  }

  if (!mongoose.isValidObjectId(userId)) {
    throw new createError(400, 'Invalid user');
  }
  const dataPost = await Post.findById(id);
  const userPostId = dataPost.user.toString();

  console.log(dataPost);

  if (userPostId === userId) {
    console.log('que rollo?');
    const postDeleted = await Post.findByIdAndDelete(id);
    if (!postDeleted) {
      throw new createError(404, 'Post not found');
    }
    return postDeleted;
  } else {
    throw new createError(401, 'Invalid post Owner');
  }
}

async function updateById(id, postData) {
  if (!mongoose.isValidObjectId(id)) {
    throw new createError(400, 'Invalid id');
  }
  if (postData.user) {
    throw new createError(401, "You can't modify the user's information");
  }
  postData.updatedAt = new Date();

  const postUpdated = await Post.findByIdAndUpdate(id, postData, {
    new: true,
    runValidators: true,
  });

  if (!postUpdated) {
    throw new createError(404, 'post not found');
  }

  return postUpdated;
}

async function getByID(id) {
  if (!mongoose.isValidObjectId(id)) throw new createError(400, 'Id not valid');

  const post = await Post.findById(id).populate('user');

  if (!post) throw new createError(404, 'Id not found');

  return post;
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  getByID,
};
