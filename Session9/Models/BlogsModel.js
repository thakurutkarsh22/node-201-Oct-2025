const mongoose = require('mongoose');
const validatorLib = require('validator');

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true, // if this is good or bad ? BAD for big data 
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 100,
            validate: (value) => {
               return validatorLib.isAlpha(value);
            }
        },
        content: {
            type: String,
            required: true,
            trim: true,
            minlength: 10,
            maxlength: 5000,
            validate: (value) => {
               return true
            }
        },
        author: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 100,
            validate: (value) => {
               return validatorLib.isAlpha(value);
            }
        }
    },
    {
        timestamps: true,
    }
);

const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;


// Bloom filter - is used as a data structure to check whether an element is present in a set or not.