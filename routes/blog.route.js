const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getOneBlog,
  deleteOneBlog,
} = require("../controllers/blog.controller");

const router = express.Router();

router.post("/blog", createBlog);
router.get("/blog", getAllBlogs);
router.get("/blog/:id", getOneBlog);
router.delete("/blog/:id", deleteOneBlog);

module.exports = router;
