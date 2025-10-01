function HomeResponse (req, res) {
    // send is a keyword in express, its not in NODE JS 
    // send will do both the write and end operation
    // setting default headers 200 and content-type text/html
    // Send is for HTML AND TEXT
    res.send('Welcome to the Home Page Express\nThis is the second line on the home page.\n end of response');
}

function AboutsResponse (req, res) {
    // we can set the response code using status
    res.status(201).send('About Page: this webiste is created by utkarsh EXPRESS JS');
}

const ContactsResponse = (req, res) => {
    res.send('Contact Page: contact us at 23123123123');
};

module.exports = {HomeResponse, AboutsResponse, ContactsResponse};