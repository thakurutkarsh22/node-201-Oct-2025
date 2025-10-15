const BlogModel = require("../Models/BlogsModel");

class BlogsService {
    // static async getAllBlogs() {
    //     return this.blogs;
    // }

    // static async getBlogById(id) {
    //     return this.blogs.find(blog => blog.id === id) || null;
    // }

    static async createBlog(title, content, author) {
        // Here we have to create an object of Blog - BUsiness logic
        const blogObject = new BlogModel({
            title,
            content,
            author
        });

        try {
            const response = await blogObject.save();
            return response;
        } catch (error) {
            throw new Error("Error creating blog: " + error);
        }

    }

    // static async updateBlog(id, { title, content, author }) {
    //     const blog = this.getBlogById(id);
    //     if (!blog) return null;
    //     if (title !== undefined) blog.title = title;
    //     if (content !== undefined) blog.content = content;
    //     if (author !== undefined) blog.author = author;
    //     blog.updatedAt = new Date();
    //     return blog;
    // }

    // static async deleteBlog(id) {
    //     const index = this.blogs.findIndex(blog => blog.id === id);
    //     if (index === -1) return false;
    //     this.blogs.splice(index, 1);
    //     return true;
    // }
}

module.exports = BlogsService;