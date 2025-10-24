// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../Models/User'); // adjust path if your User model is elsewhere

const AuthService = require("../Service/AuthService");

async function signup(req, res) {
    const body = req.body;
    const { username, email, password, contact, gender } = body;

    try {
        const response = await AuthService.register(username, email, password, contact, gender);
        res.status(201).json({
            message: "User registered successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            message: "Error during signup (Invalid credentials)",
            error: error
        });
    }
}

async function login(req, res) {
    const body = req.body;
    const { username, password } = body;

    try {
        const response = await AuthService.login(username, password );
        res.status(200).json({
            message: response instanceof Error ? "Login failed" : "Login successful",
            data: response instanceof Error ? response.message : response,
        });
    } catch (error) {
        res.status(401).json({
            message: "Login failed (Invalid credentials)",
            error: error
        });
    }
}

module.exports = {
    signup,
    login,
};