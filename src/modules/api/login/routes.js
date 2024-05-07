const express = require("express");
const loginRoutes = express.Router();
const sharedMiddlewares = require("../../../shared/middlewares");

const loginControllers = require("./controllers");

loginRoutes.get("/test-api", loginControllers.test);

module.exports = loginRoutes;