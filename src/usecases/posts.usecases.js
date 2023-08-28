const mongoose = require("mongoose");
const Post = require("../models/posts.model");
const User = require("../models/users.model");
const createError = require("http-errors");

async function getAll(title) {}

async function create(postData) {
  if (!mongoose.isValidObjectId(postData.user)) {
    throw new createError(400, "Invalid user Id");
  }
  const user = await User.findById(postData.user);
  if (!user) {
    throw new createError(404, "User not found");
  }

  return Post.create(postData);
}
