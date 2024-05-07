const config = {
    app: {
        environment: process.env.APP_ENVIRONMENT,
        name: process.env.APP_NAME,
        host: process.env.APP_HOST,
        port: process.env.APP_PORT,
        userJWTSecret: process.env.APP_USER_JWT_SECRET,
        userJWTExpiresIn: process.env.APP_USER_JWT_EXPIRESIN,
        url: process.env.URL,
        executeWebsocket : process.env.EXECUTE_WEB_SOCKET ? process.env.EXECUTE_WEB_SOCKET : "FALSE"
    },
    database: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        debug: process.env.DATABASE_DEBUG,
        timezone: process.env.DATABASE_TIMEZONE,
    },
    aws: {
        s3: {
            key: process.env.FL_STRG_KEY,
            secret: process.env.FL_STRG_SECRET,
            bucketName: process.env.FL_STRG_NAME,
            folder_prefix: process.env.FL_STRG_FLDR_PREFIX,
        },
        ses: {
            accessKey: process.env.ACCESS_KEY,
            secretKey: process.env.SECRET_KEY,
            region: process.env.REGION,
            sendses: process.env.SEND_OTP,
        },
        sns: {
            accessKey: process.env.SNS_ACCESS_KEY,
            secretKey: process.env.SNS_SECRET_KEY,
            region: process.env.SNS_REGION,
            sendsms: process.env.SNS_SEND_SMS,
            defaultotp: process.env.SNS_DEFAULT_OTP
        }
    },
    mail: {
        service: process.env.MAIL_SERVICE,
        host: process.env.MAIL_HOST,
        apiKey: process.env.MAIL_MAIL_API_KEY,
        adminMail: process.env.MAIL_ADMIN_MAIL,
        userName: process.env.MAIL_USER,
        fromMail: process.env.MAIL_FROM_MAIL,
        replyToName: process.env.MAIL_REPLY_USER,
        replyToMail: process.env.MAIL_REPLY_EMAIL,
        domainUrl: process.env.MAIL_MAIL_DOMAIN_URL,
    }
  
};

module.exports = config