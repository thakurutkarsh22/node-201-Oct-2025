const joi = require('joi');

const blogSchema = joi.object({
    title: joi.string()
        .min(3)
        .max(100)
        .trim()
        .required()
        .pattern(/^[A-Za-z]+$/)
        .messages({
            'string.pattern.base': 'Title must contain only alphabetic characters'
        }),
    content: joi.string()
        .min(10)
        .max(5000)
        .trim()
        .required(),
    author: joi.string()
        .min(3)
        .max(100)
        .trim()
        .required()
        .pattern(/^[A-Za-z]+$/)
        .messages({
            'string.pattern.base': 'Author must contain only alphabetic characters'
        })
});

// inputPayload is coming from the client (POSTMAN) req.body
function validateBlogInput(inputPayload) {
    return blogSchema.validate(inputPayload);
} 

module.exports = {blogSchema, validateBlogInput};