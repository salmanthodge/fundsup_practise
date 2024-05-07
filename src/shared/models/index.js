const otpModels = require("./otp.model");
const userModels = require("./user.model");

const sharedModels = {
    user: userModels,
    otp: otpModels
}

module.exports = sharedModels