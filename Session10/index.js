const express = require('express');
const { HomeResponse, AboutsResponse, ContactsResponse } = require('./Controllers/HomeController');
const ActivityRoute = require('./Routes/ActivityRoute');
const BlogRoute = require('./Routes/BlogRoute');
const AuthRoute = require('./Routes/AuthRoute');
const configurePassport = require('./Config/Passport');
const passport = require('passport');

const server = express();
const dotEnv = require('dotenv');
const mongoose = require('mongoose');

configurePassport(passport);

// .config() will load all the variables from .env file to process.env
dotEnv.config();


const PORT = process.env.SERVER_PORT;

server.use(express.json()); // to parse the incoming request body as JSON


// HANDLERS : handles the request and response

server.get("/", HomeResponse);

server.get("/home", HomeResponse);

server.get("/api/v1/about", AboutsResponse);

server.get("/contacts", ContactsResponse);


server.get("api/v1/fitness", (req, res) => {
    const fitnessInfo = {
        name: "utkarsh",
        age: 27,
        shouldSleep: true,
        hobbies: ['gym', 'running', 'cycling'],
        address: {
            gymname: "Cult.Fit",
            city: "Bangalore",
            state: "Karnataka",
        }
    };

    // express will automatically set the content-type to application/json if we send a json object
    // stringify also behind the scenes 
    // write the response and end the response
    res.json(fitnessInfo);
    
});

// --------- ACTIVITIES -----------
server.use("/api/v1/activity", ActivityRoute)


// Blogs 
server.use("/api/v1/blogs", BlogRoute);

// AuthRoute

server.use("/api/v1/auth", AuthRoute);

const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL)
.then(() => {
    console.log('MongoDB connected successfully!');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

server.listen(PORT, () => {
    console.log(`EXPRESS Server is running on port !! ${PORT}`);
});