const sharedServices = require("../services");
const sharedConstants = require("../constants");
// const { investment, email } = require("../constants/db_table_names.constants");
// const moment = require('moment');
const userModels = {};

userModels.read = async ({ email = "", mobile = "", user_type = "", type = "", user_id = "" }) => {
    const where = [];
    const whereParams = [];
    console.log(email, mobile, "############################")
    if (type == "email") {
      if (email != "") {
        where.push(`email='${email}'`);
      }
    }
    else if (type == "mobile") {
      if (mobile != "") {
        where.push(`mobile='${mobile}'`);
      }
      else {
        if (email != "") {
  
          console.log("email", email)
          whereParams.push(`email='${email}'`);
        }
        if (mobile != "") {
          whereParams.push(`mobile='${mobile}'`);
        }
      }
      if (mobile != "") {
        where.push(`mobile='${mobile}'`);
      }
    }
    else {
      if (mobile != "") {
        where.push(`mobile='${mobile}'`);
      }
      if (email != "") {
        where.push(`email='${email}'`);
      }
    }
    if (user_type != "") {
      where.push(`role.role_name='${user_type}'`);
    }
    if (user_id != "") {
      where.push(`user.user_id='${user_id}'`);
    }
    let result = new sharedServices.mysqlServices()
      .select(
        `
              user.user_id,
              name,
              email,
              mobile,
              is_mobile_verified,
              is_email_verified,
              date(joining_date) as joining_date,
              access.access_name,
              user_investment_id as investment_id,
              user.role_id,
              role.role_name,
              user_detail.sebi_reg_no,
              user_detail.basl_no,
              user_detail.basl_expiry,
              ifnull(investment.is_auto_trade, 'N') as is_auto_trade,
              user.current_stage,
              investment.capital
              
              `
      )
      .from(sharedConstants.dbTableNames.user)
      .leftjoin(
        sharedConstants.dbTableNames.investment,
        `user.user_id = investment.user_id`
      )
      // .leftjoin(sharedConstants.dbTableNames.otp, `user.user_id = otp.user_id`)
      .leftjoin(
        sharedConstants.dbTableNames.user_detail,
        `user.user_id = user_detail.user_id`
      )
      .leftjoin(sharedConstants.dbTableNames.role, `user.role_id = role.role_id`)
      .leftjoin(
        sharedConstants.dbTableNames.roleaccess,
        `role.role_id = role_access.role_id`
      )
      .leftjoin(
        sharedConstants.dbTableNames.access,
        `access.access_id = role_access.access_id`
      );
  
    if (where.length) {
      result = result.where(where.join(" AND "));
    }
  
    if (whereParams.length) {
      result = result.where(whereParams.join(" OR "));
    }
  
    console.log(result.query);
  
    result = await result.build();
  
    return result;
  };


  userModels.getUserFamilyDetail = async (user_id) => {
    const where = [];
  
    where.push(`fd.user_id = ${user_id}`)
  
    let result = new sharedServices.mysqlServices()
      .select(
        `family_id, is_admin`
      )
      .from(sharedConstants.dbTableNames.family_detail, `fd`)
    if (where.length) {
      result = result.where(where.join(" AND "));
    }
    result = await result.build();
    return result;
  };

  module.exports = userModels