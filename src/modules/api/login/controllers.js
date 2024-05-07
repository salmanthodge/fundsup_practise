const sharedServices = require("../../../shared/services");

const Controllers = {};

Controllers.test = async (req, res, next) => {
  
  console.log(req.requestId)
  const logger = sharedServices.loggerServices.info(
    "Request body data = " + JSON.stringify(req.body)
  );
  res.send("Fundsup api is now running...");
};

module.exports = Controllers