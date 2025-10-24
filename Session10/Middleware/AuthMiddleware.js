const SECRET_PASSWORD = "asdf12345"

function AuthMiddleware (req, res, next) {
    const headers = req.headers;
    const userInputAuthorization = headers.authorization;

    if(userInputAuthorization === SECRET_PASSWORD) {
        next()
    } else {
        res.status(401).json({message: "Unauthorized password is incorrect"})
    }
}

module.exports = AuthMiddleware;