const masterConstants = {
    plan_status: {
        1: "Active",
        2: "Expiring Soon",
        3: "Expired"
    },
    type: {
        1: "EMAIL",
        2: "MOBILE"
    },
    status: {
        1: "ACCEPTED",
        2: "REJECTED"
    },
    document_type: {
        1: "PAN_CARD",
        2: "AADHAR_CARD",
        3: "SIGN_AGREEMENT",
        4: "SEBI_REGISTRATION",
        5: "BASL_MEMBERSHIP",
        6: "INVESTEMENT_ADVISORY_EXAM_1",
        7: "INVESTEMENT_ADVISORY_EXAM_2"
    },
    investment_type: {
        1: "MODEL PORTFOLIO",
        2: "CUSTOM",
        3: "ALGO"
    },
    risk_profile: {
        1: "Aggressive",
        2: "Moderate",
        3: "Conservative"
    },
    user_type: {
        1: "Admin",
        2: "RIA",
        3: "Customer"
    },
    index: {
        "NSE": "NSE",
        "BSE": "BSE"
    },
    buy_sell_type: {
        "BUY": "BUY",
        "SELL": "SELL",
        "SQUARE OFF": "SQUARE OFF"
    },
    market_limit: {
        "MARKET": "MARKET",
        "LIMIT": "LIMIT"
    },
    userType: {
        RIA: "RIA",
    },
    loantype: {
        1: "Instant Loans",
        2: "Home Loan",
        3: "Secured Loan",
        4: "Working capital Loan",
        5: "Vehicle Loan",
        6: "Educational Loan",
    },
    currentstage: {
        0: "Pending",
        1: "Email Mobile Verification",
        2: "Risk Assessment",
        3: "Investment Details",
        4: "Other Details"
    },
    autotrade: {
        1: "YES",
        2: "NO"
    },
    products: {
        "custom": 1,
        "modelportfolio": 2,
        "algo": 3
    },
    config: {
        ZERODHA: {
            ACCESS_TOKEN: "zerodha_access_token",
            API_KEY: "zerodha_api_key",
            SECRET_KEY: "zerodha_secret_key"
        },
        BASE_INVESTMENT : "investment_amount",
        XTS : {
            API_KEY: "xts_api_key",
            SECRET_KEY: "xts_secret_key"
        }
    },
    broker: {
        ZERODHA: "Zerodha",
        xts: "xts"
    },
    tradeStatus: {
        PENDING: 0,
        EXECUTED: 1,
        // COMPLETED:2,
        COMPLETE: 2,
        REJECTED: 3,
        CANCELLED: 4,
        UPDATE: 5
    },
    onboard_status:{
        PENDING:"PENDING",
        ACCEPTED:"ACCEPTED",
        REJECTED:"REJECTED",
    },
    exchange: {
        xts: {
            nse: "NSECM",
            bse: "BSECM"
        },
        zerodha: {
            nse: "NSECM",
            bse: "BSECM"
        }
    },
    customer_category: [
        {
            customer_category: "Individual",
        },
        {
            customer_category: "NonIndividual",
        }
    ]
};

module.exports = masterConstants;
