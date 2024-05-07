module.exports = {
    messages: {
        RPS0001: {
            code: "RPS0001",
            statusCode: 200,
            message: "Your password has been reset successfully!"
        },
        RPS0002: {
            code: "RPS0002",
            statusCode: 200,
            message: "Code verified successfully!"
        },
    },
    errorMessages: {
        RPE0001: {
            code: "RPE0001",
            statusCode: 400,
            message: "Email Id is required",
        },
        RPE0002: {
            code: "RPE0002",
            statusCode: 400,
            message: "Invalid Email Id",
        },
        RPE0003: {
            code: "RPE0003",
            statusCode: 400,
            message: "New password cannot be old password.",
        },
        RPE0004: {
            code: "RPE0004",
            statusCode: 400,
            message: "OTP is required",
        },
        RPE0005: {
            code: "RPE0005",
            statusCode: 400,
            message: "You have reached the code resend limit. Please wait for 10 mins before trying again.",
        },
        RPE0006: {
            code: "RPE0006",
            statusCode: 400,
            message: "Invalid Code"
        },
        RPE0007: {
            code: "RPE0007",
            statusCode: 400,
            message: "Type is required: email / mobile"
        },
        RPE0008: {
            code: "RPE0008",
            statusCode: 400,
            message: "Old password is required"
        },
        RPE0009: {
            code: "RPE0009",
            statusCode: 400,
            message: "Invalid Old Password"
        },
        RPE00010: {
            code: "RPE00010",
            statusCode: 400,
            message: "Mobile is required"
        },
        RPE00011: {
            code: "RPE00011",
            statusCode: 400,
            message: "Invalid Mobile No"
        },
    }
};
