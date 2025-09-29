const http = require('http');
const PORT = 8089;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Welcome to the Home Page');
        res.write('\nThis is the second line on the home page.');
        res.end("\n end of response");

    } else if (url === '/about') {
        req.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('About Page: this webiste is created by utkarsh');
        res.end();
    } else if (url === '/fitness') {
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

        // fitnessInfo -> DATA 
        // HEADER -> METADATA (data about data)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(fitnessInfo));
    }
        
});



server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






//  ------------- NOTES ---------------


// 1. COMMON JS -> NODE JS
// const http = require('http');
// module.exports = http;


// 2. ES5 (echa script 5) -> Frontend language (React, Angular, Vue)
// import xyz from 'abc';
// export default xyz;