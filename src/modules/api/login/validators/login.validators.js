const {masterConstants} = require("../../../../shared/constants")
const sharedServices = require("../../../../shared/services");
const sharedValidators = require("../../../../shared/validators");
const loginConstants = require("../constants");

module.exports = ({type ,email,mobile}) =>{
    if(sharedValidators.isRequired(type)) {
        sharedServices.error.throw(loginConstants.login.errorMessages.LE0006)
    }

    if (!Object.values(masterConstants.type).some((v) => v === type.toUpperCase())) {
        sharedServices.error.throw(
          loginConstants.login.errorMessages.LE0006
        )
      }
      if (type == "email") {
        if (sharedValidators.isRequired(email)) {
          sharedServices.error.throw(loginConstants.login.errorMessages.LE0008);
        }
        if (!sharedValidators.isValidEmail(email)) {
          sharedServices.error.throw(loginConstants.login.errorMessages.LE0008);
        }
      } else {
        if (sharedValidators.isRequired(mobile)) {
          sharedServices.error.throw(loginConstants.login.errorMessages.LE0008);
        }
        if (!sharedValidators.isvalidMobileNumber(mobile)) {
          sharedServices.error.throw(loginConstants.login.errorMessages.LE0008);
        }
      }
    
      return {
        type,
        email,
        mobile
      }
}