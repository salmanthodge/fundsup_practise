const authServices = require("./auth.services");
const loggerServices = require("./logger.services");
const mysqlServices = require("./mysql.services");
const mysqlHelperServices = require("./mysqlHelpers.services");
const responseServices = require("./response.services");
const uuidServices = require("./uuid.services");
const error = require("./error.services");
const fileServices = require("./files.services");
const cryptoServices = require("./crypto.services");
const commonServices = require("./common.services");

const sharedServices = {
    authServices,
    loggerServices,
    mysqlServices,
    mysqlHelperServices,
    responseServices,
    uuidServices,
    error,
    fileServices,
    cryptoServices,
    commonServices,
};

module.exports = sharedServices;
