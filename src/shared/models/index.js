const otpModels = require("./otp.model");
const userModels = require("./user.model");
const companyModels = require("./company.model")

const sharedModels = {
    user: userModels,
    otp: otpModels,
    company:companyModels
}

module.exports = sharedModels