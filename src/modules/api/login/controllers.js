const Validators = require("./validators");
const loginServices = require("./services");
const loginConstants = require("./constants");
const sharedServices = require("../../../shared/services");
const sharedConstants = require("../../../shared/constants");
const { aws } = require("../../../shared/constants/config.constants");

const Controllers = {};

Controllers.test = async (req, res, next) => {
  
  console.log(req.requestId)
  const logger = sharedServices.loggerServices.info(
    "Request body data = " + JSON.stringify(req.body)
  );
  res.send("Fundsup api is now running...");
};

Controllers.login = async (req, res, next) => {
  try {
    const validatedRequest = Validators.loginValidators(req.body);
    let loginData = await loginServices.login.validateLogin({
      email: validatedRequest.email,
      mobile: validatedRequest.mobile,
    });

    if (loginData.length == 0) {
      next({ ...loginConstants.login.errorMessages.LE0003 });
    } else {
      // const verificationCode = Math.floor(100000 + Math.random() * 900000);
      // const userData = await loginServices.login.addOTPData({
      //   user_id: loginData[0].user_id,
      //   otp_code: verificationCode,
      //   type: validatedRequest.type,
      //   attempt_count: 1
      // });

      // if (validatedRequest.type.toUpperCase() == sharedConstants.masterConstants.type[1]) {
      //   let filePath = path.join(__dirname, "..", "..", "..", "shared", "templates", "email_otp_template.html");
      //   let customerMailContent = await sharedServices.fileServices.readFile(filePath, { "name": validatedRequest.name, "verificationcode": verificationCode });

      //   const customerMailData = await loginServices.login.sendOTPMail({
      //     toEmail: validatedRequest.email,
      //     mailContent: customerMailContent,
      //     mailHeader: "Fundsup Verification"
      //   });

      // }
      // else {
      //   const sentsms = await sharedServices.smsServices.sendSMS(sharedMessages.otpMessage.OTPSMS001.message + verificationCode, " +91" + validatedRequest.mobile);
      // }

      next({ ...loginConstants.login.messages.LS0001 })
    }
  }
  catch (error) {
    if (error.message.indexOf("code") > -1) {
      next(JSON.parse(error.message))
    }
    else {
      next(error.message);
    }
  }

};

Controllers.verifyotp = async (req, res, next) => {
  try {
    const validatedRequest = Validators.verifyPasswordValidators(req.body);

    let userData = await loginServices.login.getOTPDetails({
      email: validatedRequest.email,
      type: validatedRequest.type,
      mobile: validatedRequest.mobile,
    });
    console.log(userData)

    if (userData.length > 0) {
      if (userData[0].otp != validatedRequest.otp && validatedRequest.otp != aws.sns.defaultotp) {
        // update attempt count

        let otpData = await loginServices.login.updateOTPData({
          user_id: userData[0].user_id,
          otp_id: userData[0].otp_id,
          no_of_attempt: userData[0].no_of_attempt + 1,
          otp: validatedRequest.otp
        });

        next({ ...loginConstants.login.errorMessages.LE0009 });
      } else {
        let loginData = await loginServices.login.validateLogin({
          email: validatedRequest.email,
          mobile: validatedRequest.mobile,
          type: validatedRequest.type
        });

        const familyData = await loginServices.login.getUserFamilyDetails({ user_id: loginData[0].user_id })
        let family_id = 0;
        let is_admin = 0;
        if (familyData.length > 0) {
          family_id = familyData[0].family_id;
          is_admin = familyData[0].is_admin == "N" ? 0 : 1
        }

        const payload = {
          user_id: loginData[0].user_id,
          email: loginData[0].email,
          mobile: loginData[0].mobile,
          role_id: loginData[0].role_id,
          joining_date: loginData[0].joining_date,
          is_mobile_verified: loginData[0].is_mobile_verified,
          is_email_verified: loginData[0].is_email_verified
          //access_name: loginData[0].access,
        };
        const secret = sharedConstants.appConfig.app.userJWTSecret;
        const expiresIn = sharedConstants.appConfig.app.userJWTExpiresIn;
        const token = await sharedServices.authServices.getJWT(payload, secret, {
          algorithm: "HS256",
          allowInsecureKeySizes: true,
          expiresIn: expiresIn,
        });
        res.send({
          ...loginConstants.login.messages.LS0002,
          result: {
            jwtToken: token,
            user_id: loginData[0].user_id,
            name: loginData[0].name,
            email: loginData[0].email,
            is_mobile_verified: loginData[0].is_mobile_verified,
            is_email_verified: loginData[0].is_email_verified,
            role_id: loginData[0].role_id,
            role_name: loginData[0].role_name,
            family_id: family_id,
            is_admin: is_admin
          },
        });
      }
    }
    else {
      next({ ...loginConstants.login.errorMessages.LE0005 })
    }
  } catch (error) {
    if (error.message.indexOf("code") > -1) {
      next(JSON.parse(error.message))
    }
    else {
      next(error.message);
    }
  }
}

module.exports = Controllers