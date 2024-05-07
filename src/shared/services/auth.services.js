const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { app } = require("../constants/config.constants");
const { appConfig } = require("../constants");

const authServices = {};

// service_name: getJWT
// service_description:
//      creates a JWT token based on provided payload, secret and options
authServices.getJWT = (payload, secret, options) => {
    return jwt.sign(payload, secret, options);
};

// service_name: validateJWT
// service_description:
//      get jwt string and secret and validate it
authServices.validateJWT = (jwtString, secret) => {
    return jwt.verify(jwtString, secret);
};

// service_name: getPasswordHash
// service_description:
//      take password and encrypt it
authServices.getPasswordHash = async (password) => {
    const saltRounds = 10;
    const hash = await bcrypt.hashSync(password, saltRounds);
    return hash.replace("$2a$", "$2y$");
};

// service_name: comparePassword
// service_description:
//      get password and password hash as input and validate if password is valid or not
authServices.comparePassword = async (password, passwordHash = "") => {
    passwordHash = passwordHash.replace("$2y$", "$2a$");
    console.log("hashed password", password);
    return await bcrypt.compare(password, passwordHash);
};

authServices.decodeJWTToken = async (token) => {
    const decodedJWTToken = jwt.decode(token);
    return decodedJWTToken;
};
module.exports = authServices;
