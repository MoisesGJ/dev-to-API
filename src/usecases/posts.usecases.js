const mongoose = require("mongoose");
const Post = require("../models/posts.model");
const User = require("../models/users.model");
const createError = require("http-errors");

async function getAll(title) {
  return await Post.find();
}

async function create(postData) {
  //   if (!mongoose.isValidObjectId(postData.user)) {
  //     throw new createError(400, "Invalid user Id");
  //   }
  //   const user = await User.findById(postData.user);
  //   if (!user) {
  //     throw new createError(404, "User not found");
  //   }

  return Post.create(postData);
}

async function deleteById(id) {
  if (!mongoose.isValidObjectId(id)) {
    throw new createError(400, "Invalid id");
  }
  const postDeleted = await Post.findByIdAndDelete(id);

  if (!postDeleted) {
    throw new createError(404, "Post not found");
  }

  return postDeleted;
}

async function updateById(id, postData) {
  if (!mongoose.isValidObjectId(id)) {
    throw new createError(400, "Invalid id");
  }
  // if (postData.user) {
  //   if (!mongoose.isValidObjectId(postData.user)) {
  //     throw new createError(400, "Invalid user id");
  //   }
  //   const user = await User.findById(postData.user);
  //   if (!user) {
  //     throw new createError(404, "User not found");
  //   }
  // }

  postData.updatedAt = new Date();

  const postUpdated = await Post.findByIdAndUpdate(id, postData, {
    new: true,
    runValidators: true,
  });

  if (!postUpdated) {
    throw new createError(404, "post not found");
  }

  return postUpdated;
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
};
