const validators = require("./validators");
const riskProfileServices = require("./services");
const riskProfileConstants = require("./constants");
const sharedServices = require("../../../shared/services");

const Controllers = {};

Controllers.getCompany = async (req, res, next) => {
    try {
      sharedServices.loggerServices.info("Company Controllers --> getCompany");
      const validate = await validators.getCompany(req);
      const data = await riskProfileServices.companyService.getCompanyList(validate);
      res.json({
        ...riskProfileConstants.getCompany.messages.GCDS0001,
        result: data,
      });
    } catch (error) {
      if (error.message.indexOf("code") > -1) {
        next(JSON.parse(error.message))
      }
      else {
        next(error.message);
      }
    }
  };

  
module.exports = Controllers;
