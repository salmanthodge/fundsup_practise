const express = require("express");
const appModules = express.Router();

const loginModules = require("../modules/api/login/routes")
const companyModules = require("../modules/api/company/routes")

appModules.use("/api",loginModules)
appModules.use("/api",companyModules)

module.exports = appModules

