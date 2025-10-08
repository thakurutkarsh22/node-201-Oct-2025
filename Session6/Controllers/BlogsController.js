const BlogModel = require("../Models/BlogsModel");

async function createNewBlog(req, res) {
    const body = req.body;
    const {title, content, author} = body;
    
    // Here we have to create an object of Blog
    const blogObject = new BlogModel({
        title,
        content,
        author
    });

    // save this object to database
    try {
        const response = await blogObject.save();
        res.status(201).json({
            message: "Blog created successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating blog",
            error: error
        });
    }
}

async function getAllBlogs(req, res) {
    try {
        const response = await BlogModel.find({});
        res.status(200).json({
            message: "Blogs fetched successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching blogs",
            error: error
        });
    }
   
}

function getBlogById(req, res) {
    // try{
    //     const blogId = req.params.blogId;
        
    //     const response = await BlogModel.


        
    // }
}

function deleteBlogById(req, res) {
}

module.exports = {
    createNewBlog,
    getAllBlogs,
    getBlogById,
    deleteBlogById
};