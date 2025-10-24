const bcrypt = require('bcrypt');
const UserModel = require("../Models/UserModel");
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../Middleware/AuthMiddlewareJwt');

class AuthService {

    static async register(username, email, password, contact, gender) {

        // create objwct - business logic 
        const hashedPassword = await this.encryptPassword(password);
        const userObject = new UserModel({
            username,
            email,
            password: hashedPassword,
            contact,
            gender
        });

        // DB call 
        try {
            const response = await userObject.save();
            return response;
        } catch (error) {
            return error;
        }

    }

    // bcrypt uses cpu intensive algorithm 
    static async encryptPassword(password) {
        const saltRounds = await bcrypt.genSalt(10); // how many rounds of hashing default 10
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }

    static async login(username, password) {
        

        try {
            const user = await this.findUserByUserName(username);
            if (!user) {
                throw new Error("User not found");
            } else {
                const encryptedPassword = user.password; // HASH 
                const plainTextPassword = password; // PLAIN TEXT
                const isPasswordMatch = await bcrypt.compare(plainTextPassword, encryptedPassword);
                if (isPasswordMatch) {
                    // we find user and its password matches
                    const jwtToken = jwt.sign({username: user.username, email: user.email, nationality: "Indian" },JWT_SECRET_KEY, {
                        expiresIn: '10000ms' // 10s token expiry
                    });
                    console.log("Generated JWT Token: ", jwtToken);
                    return {user, token: jwtToken};
                } else {
                    throw new Error("Invalid credentials");
                }

            }
        } catch (error) {
            return error;
        }
    }

    static async findUserByUserName(username) {
        try {
            const user = await UserModel.findOne({ username });
            return user;
        } catch (error) {
            return null;
        }
    }


}

module.exports = AuthService;