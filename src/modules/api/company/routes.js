const express = require("express");
const companyRoutes = express.Router();
const companyController = require("./controllers");

const sharedMiddlewares = require("../../../shared/middlewares");

companyRoutes.get(
    "/company-test",
    sharedMiddlewares.authMiddleware,
    companyController.getCompany
  ); // error 

module.exports = companyRoutes;
