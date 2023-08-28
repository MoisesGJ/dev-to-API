const { Router } = require("express");
const posts = require("../usecases/posts.usecases");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allPosts = await posts.getAll();
    res.json({
      message: "post",
      posts: {
        allPosts,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const postData = req.body;
    const newPost = await posts.create(postData);
    res.status(201).json({
      message: "Post created successfully",
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    const status = error.name === "ValidationError" ? 400 : 500;
    res.status(error.status || status);
    res.json({
      message: "Error creating post",
      error: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;

    const postUpdate = await posts.updateById(id, dataToUpdate);

    res.json({
      message: "Post update successful",
      data: {
        post: postUpdate,
      },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      message: "something went wrong",
      error: error.message,
    });
  }
});

module.exports = router;
