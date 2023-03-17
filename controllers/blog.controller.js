const Blog = require("../models/blog.model");

exports.createBlog = async (req, res) => {
  try {
    const blogData = req.body;
    const blog = new Blog(blogData);
    await blog.save();
    res.status(201).json({
      status: "success",
      message: "Data inserted successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "success",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.getOneBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.deleteOneBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    await Blog.findByIdAndDelete(blogId);
    res.status(200).json({
      status: "success",
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
