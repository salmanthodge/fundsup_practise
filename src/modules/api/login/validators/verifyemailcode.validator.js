const { masterConstants } = require("../../../../shared/constants");
const sharedServices = require("../../../../shared/services");
const sharedValidators = require("../../../../shared/validators");
const verifyEmailCodeConstants = require("../constants")

module.exports = ({
    email,
    mobile,
    otp,
    type
}) => {
    if (sharedValidators.isRequired(type)) {
        sharedServices.error.throw(
            verifyEmailCodeConstants.resetPassword.errorMessages.RPE0007
        )
    }
    if (!Object.values(masterConstants.type).some((v) => v === type.toUpperCase())) {
        sharedServices.error.throw(
            verifyEmailCodeConstants.resetPassword.errorMessages.RPE0007
        )
    }
    if (type == "email") {
        if (sharedValidators.isRequired(email)) {
            sharedServices.error.throw(
                verifyEmailCodeConstants.resetPassword.errorMessages.RPE0001
            )
        }
        if (!sharedValidators.isValidEmail(email)) {
            sharedServices.error.throw(
                verifyEmailCodeConstants.resetPassword.errorMessages.RPE0002
            )
        }
    }
    if (type == "mobile") {
        if (sharedValidators.isRequired(mobile)) {
            sharedServices.error.throw(
                verifyEmailCodeConstants.resetPassword.errorMessages.RPE00010
            )
        }
        if (!sharedValidators.isvalidMobileNumber(mobile)) {
            sharedServices.error.throw(
                verifyEmailCodeConstants.resetPassword.errorMessages.RPE00011
            )
        }
    }
    if (sharedValidators.isRequired(otp)) {
        sharedServices.error.throw(
            verifyEmailCodeConstants.resetPassword.errorMessages.RPE0004
        )
    }
    return {
        email,
        mobile,
        otp,
        type
    }
};
