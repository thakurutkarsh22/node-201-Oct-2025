const JWT_SECRET_KEY = "asdjbflaksdjbflsdkjfbdslkjfbdsljfbsdljfbdlsjhfblsdajfbldskj123131";
const jwt = require('jsonwebtoken');


function AuthMiddlewareJwt (req, res, next) {
    console.log("AuthMiddlewareJwt called - protecting the route");
    const headers = req.headers;
    const authorization = headers.authorization;
    if(!authorization) {
        return res.status(401).json({message: "Unauthorized please login you look like a new user"});
    }

    const customerBearer = authorization.split(" ")[0]
    const token = authorization.split(" ")[1]; // encypted token ajshdbfasd87sadvasoduygasdfco8g7sdvc0as87casv

    if(!token) {
        return res.status(401).json({message: "Unauthorized please login you look like a new user"});
    } else {
       jwt.verify(token, JWT_SECRET_KEY, (err, decodedPayload) => {
        if(err) {
            return res.status(401).json({message: "Unauthorized invalid please login again", error: err});
        } else {
            console.log("Decoded JWT Payload:", decodedPayload);
            // req.user = decodedPayload; // attaching user info to request object
            next();
        }
       });
    }


}

module.exports = {AuthMiddlewareJwt, JWT_SECRET_KEY} ;