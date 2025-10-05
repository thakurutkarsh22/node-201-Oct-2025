const express = require('express');
const { GetAllUsers, GetUserByGender, GetUserByFirstName } = require('../Controllers/ActivityController');
const AuthMiddleware = require('../Middleware/AuthMiddleware');
const router = express.Router();


router.get("/users",AuthMiddleware, GetAllUsers);

router.get("/users/search",AuthMiddleware, GetUserByGender); 

router.get("/user/:firstNamezzzzzzz",AuthMiddleware, GetUserByFirstName);

module.exports = router;