const express = require("express");
const loginRoutes = express.Router();
const sharedMiddlewares = require("../../../shared/middlewares");

const loginControllers = require("./controllers");

loginRoutes.get("/test-api", loginControllers.test);
loginRoutes.post("/login-test", loginControllers.login);
loginRoutes.post("/verify-otp-test", loginControllers.verifyotp);

module.exports = loginRoutes;