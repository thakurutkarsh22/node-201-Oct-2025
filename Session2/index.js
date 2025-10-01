// npm init creates a package.json file
// npm i express installs express and adds it to dependencies in package.json


const express = require('express');
const { HomeResponse, AboutsResponse, ContactsResponse } = require('./Controllers/HomeController');
const HomeRoute = require('./Routes/HomeRoute');
const ActivityRoute = require('./Routes/ActivityRoute');
const server = express();
const PORT = 8089;


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

// use allows all types of requests GET, POST, DELETE, PUT, PATCH
server.use("/api/v1/activity", ActivityRoute)


server.listen(PORT, () => {
    console.log(`EXPRESS Server is running on port !! ${PORT}`);
});