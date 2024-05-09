const companyConstants = require("../constants");
const sharedServices = require("../../../../shared/services");
const { isRequired } = require("../../../../shared/validators");

module.exports = (req, isSearchRequired = false) => {
  const { userRefId } = req;
  const { search, exchange } = req.query;
  

  if (isRequired(userRefId)) {
    sharedServices.error.throw(
      companyConstants.getCompany.errorMessages.GCDE0001
    );
  }

  if (isSearchRequired) {
    if (isRequired(search)) {
      sharedServices.error.throw(
        companyConstants.getCompany.errorMessages.GCDE0002
      );
    }
  }

  return {
    user_id: userRefId,
    search,
    exchange
  };
};
