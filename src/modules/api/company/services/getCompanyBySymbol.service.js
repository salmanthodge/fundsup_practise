const sharedModels = require("../../../../shared/models")
const sharedServices = require("../../../../shared/services")

module.exports = async (symbol) =>{
    sharedServices.loggerServices.info("getCompany --> getCompanyBySymbol Service")
    const data = await sharedModels.company.getCompanyBySymbol(symbol)
    return data
}
