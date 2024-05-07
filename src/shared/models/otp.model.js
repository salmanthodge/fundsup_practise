const sharedServices = require("../services");
const sharedConstants = require("../constants");
const otpModels = {};

otpModels.getOTPDetails = async (email, type, mobile) => {

    const where = [];
  
    if (type == "email") {
      where.push(`type='email'`);
      if (email != "") {
        where.push(`email='${email}'`);
      }
  
    }
  
    if (type == "mobile") {
      where.push(`type='mobile'`);
      if (mobile != "") {
        where.push(`mobile='${mobile}'`);
      }
    }
  
    let result = new sharedServices.mysqlServices()
      .select(
        `
              user.user_id,
              otp,
              otp_id,
              coalesce(no_of_attempt, 0) as no_of_attempt,
              user.is_email_verified,
              user.is_mobile_verified,
              user.current_stage
              `
      )
      .from(sharedConstants.dbTableNames.user)
      .join(sharedConstants.dbTableNames.otp, `user.user_id = otp.user_id`);
    // .orderBy(`otp.otp_id desc`)
    if (where.length) {
      result = result.where(where.join(" AND "));
    }
  
    result = result.orderBy(`otp.otp_id desc`).limit(1);
  
    console.log(result.query);
  
    result = await result.build();
    return result;
  
  };

  otpModels.updateOTPData = async (user_id, otp_id, no_of_attempt, otp) => {
    const where = [];
  
    if (otp_id) {
      where.push(`otp_id='${otp_id}'`);
    }
  
    const result = await new sharedServices.mysqlServices()
      .update(
        sharedConstants.dbTableNames.otp,
        sharedServices.mysqlHelperServices.parseUpdateValues({
          no_of_attempt: no_of_attempt,
          otp: otp,
        })
      )
      .where(where.join(" AND "))
      .build();
  
    return result;
  };

  module.exports = otpModels;