const express = require('express');
const { GetAllUsers, GetUserByGender, GetUserByFirstName } = require('../Controllers/ActivityController');
const router = express.Router();

// 1. Get all users 

router.get("/users", GetAllUsers);

// 2. get user by gender 
// QUERY PARAMS - https://www.google.com/search?q=sachin anything after ? is query params
router.get("/users/search", GetUserByGender); 

// 3. get user by FirstName
// ROUTE PARAMS 
// example: https://pokeapi.co/api/v2/pokemon/pikachu ; https://pokeapi.co/api/v2/pokemon/ditto
router.get("/user/:firstNamezzzzzzz", GetUserByFirstName);

module.exports = router;