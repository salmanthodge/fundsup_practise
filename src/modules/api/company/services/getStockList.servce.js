const sharedModels = require("../../../../shared/models");
const sharedServices = require("../../../../shared/services");

const companyService ={}

companyService.getCompanyList = async (whereParams) =>{
    sharedServices.loggerServices.info("companyService --> getStockList Service")
    const data = await sharedModels.company.getCompany(whereParams)
    return data;
}

module.exports = companyService
