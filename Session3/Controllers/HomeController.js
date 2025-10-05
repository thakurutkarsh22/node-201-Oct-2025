function HomeResponse (req, res) {
    res.send('Welcome to the Home Page Express\nThis is the second line on the home page.\n end of response');
}

function AboutsResponse (req, res) {
    res.status(201).send('About Page: this webiste is created by utkarsh EXPRESS JS');
}

const ContactsResponse = (req, res) => {
    res.send('Contact Page: contact us at 23123123123');
};

module.exports = {HomeResponse, AboutsResponse, ContactsResponse};