const express = require('express');
const { createNewBlog, getAllBlogs, getBlogById, deleteBlogById } = require('../Controllers/BlogsController');
const router = express.Router();


router.post("/createNewBlog", createNewBlog);
router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById/:blogId", getBlogById);
router.delete("/deleteBlogById/:blogId", deleteBlogById);


module.exports = router;