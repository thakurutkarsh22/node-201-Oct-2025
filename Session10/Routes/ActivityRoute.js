const express = require('express');
const { GetAllUsers, GetUserByGender, GetUserByFirstName } = require('../Controllers/ActivityController');
const AuthMiddleware = require('../Middleware/AuthMiddleware');
const { AuthMiddlewareJwt } = require('../Middleware/AuthMiddlewareJwt');
const router = express.Router();

const passport = require('passport');
const AuthMiddlewarePassportJwt = passport.authenticate('jwt', 
    { session: false, failureRedirect: '/login' });


router.get("/users",AuthMiddlewarePassportJwt, GetAllUsers);

router.get("/users/search",AuthMiddlewareJwt, GetUserByGender); 

router.get("/user/:firstNamezzzzzzz",AuthMiddleware, GetUserByFirstName);

module.exports = router;