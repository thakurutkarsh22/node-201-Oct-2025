const express = require('express');
const { GetAllUsers, GetUserByGender, GetUserByFirstName } = require('../Controllers/ActivityController');
const AuthMiddleware = require('../Middleware/AuthMiddleware');
const { AuthMiddlewareJwt } = require('../Middleware/AuthMiddlewareJwt');
const router = express.Router();


router.get("/users",AuthMiddlewareJwt, GetAllUsers);

router.get("/users/search",AuthMiddlewareJwt, GetUserByGender); 

router.get("/user/:firstNamezzzzzzz",AuthMiddleware, GetUserByFirstName);

module.exports = router;