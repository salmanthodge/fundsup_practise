const express = require("express");
const appModules = express.Router();

const loginModules = require("../modules/api/login/routes")

appModules.use("/api",loginModules)

module.exports = appModules

