const { JWT_SECRET_KEY } = require('../Middleware/AuthMiddlewareJwt');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const JWT_KEY = JWT_SECRET_KEY // this is the key that creates JWT and that decrypt jwt 

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY
};

// all these things jwt.verify happens inside this stratergy
const stratergy = new JwtStrategy(opts, (jwt_payload, done) => {
    try {
        const userDetail = jwt_payload; 
        console.log("JWT Payload received in passport stratergy: ", userDetail);
        // edit the req 
        // logging 
        return done(null, userDetail);
    } catch(error) {
        return done(error, false);
    }
});

module.exports =  (passport) => {
    passport.use(stratergy);
}