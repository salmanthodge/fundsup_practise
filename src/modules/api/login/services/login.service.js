const loginConstants = require("../constants")
const sharedModels = require("../../../../shared/models")
const sharedServices = require("../../../../shared/services")

const loginService = {}

loginService.validateLogin = async ({email,mobile, type = ""}) =>{
    loginUserData = await sharedModels.user.read({email,mobile, type:type})

    const res = Array.from(
        loginUserData.reduce(
          (m, { user_id }) => m.set(user_id, [...(m.get(user_id) || [])]),
          new Map()
        ),
        ([user_id]) => ({ user_id })
      );
    
      for (let i = 0; i < res.length; i++) {
        let filter_data = loginUserData.filter((x) => x.user_id == res[i].user_id);
        for (let k = 0; k < filter_data.length; k++) {
          res[i].user_id = filter_data[k].user_id;
          res[i].name = filter_data[k].name;
          res[i].email = filter_data[k].email;
          res[i].mobile = filter_data[k].mobile;
          res[i].mobile = filter_data[k].mobile;
          res[i].is_mobile_verified = filter_data[k].is_mobile_verified;
          res[i].is_email_verified = filter_data[k].is_email_verified;
          res[i].joining_date = filter_data[k].joining_date;
          res[i].role_id = filter_data[k].role_id;
          res[i].role_name = filter_data[k].role_name;
          if (!res[i].access) {
            res[i].access = [filter_data[k].access_name];
          } else {
            // console.log(res[i].access);
            res[i].access.push(filter_data[k].access_name);
          }
        }
      }
      return res;    
}

loginService.getOTPDetails = async ({ email, type, mobile }) => {
  const otpData = await sharedModels.otp.getOTPDetails(email, type, mobile);
  return otpData;
};

loginService.updateOTPData = async ({ user_id, otp_id, no_of_attempt, otp }) => {
  const otpData = await sharedModels.otp.updateOTPData(
    user_id,
    otp_id,
    no_of_attempt,
    otp
  );
  return otpData;
};

loginService.getUserFamilyDetails = async ({ user_id }) => {
  const familyData = await sharedModels.user.getUserFamilyDetail(user_id);
  return familyData;
}

module.exports = loginService