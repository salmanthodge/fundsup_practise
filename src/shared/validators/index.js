const sharedValidators = {};

sharedValidators.isNull = (value) => value === null;

sharedValidators.isUndefined = (value) => value === undefined;
sharedValidators.isString = (value) => value === "string";

sharedValidators.isEmpty = (value) => value === "";

sharedValidators.isRequired = (value) =>
(
    sharedValidators.isNull(value) ||
    sharedValidators.isUndefined(value) ||
    sharedValidators.isString(value) ||
    sharedValidators.isEmpty(value)
);

sharedValidators.isExist = !sharedValidators.isRequired;

sharedValidators.isNotExist = sharedValidators.isRequired;

sharedValidators.isArray = value => value instanceof Array

sharedValidators.isEmptyArray = (value) => !sharedValidators.isRequired(value) || sharedValidators.isArray(value) || value.length === 0;

sharedValidators.isObject = value => value instanceof Object

sharedValidators.isEmptyObject = (value) => Object.keys(value).length === 0

sharedValidators.isValidName = (value) => /[\w{}]$/.test(value);

sharedValidators.isValidPan = (value) => /[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value);

sharedValidators.isValidEmail = (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

sharedValidators.isValidEmail1 = (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

sharedValidators.isInvestmentType = (value) => /^(ACM|AMC|CAM|CMA|MAC|MCA|AC|AM|CA|CM|MA|MC|A|C|M|A-C-M|A-M-C|C-A-M|C-M-A|M-A-C|M-C-A|A-C|A-M|C-A|C-M|M-A|M-C)$/.test(value);





sharedValidators.isvalidMobileNumber = (value) => phoneNo = /^[6-9]\d{9}$/.test(value);

sharedValidators.isvalidMobileNumber1 = (value) => phoneNo = /^(?:\+?91)?[6789]\d{9}$/.test(value);

sharedValidators.isEquals = (value, matchValue) => value === matchValue;

sharedValidators.isNotEquals = (value, matchValue) => value !== matchValue;

sharedValidators.isValidDate = (value) => /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(value);

sharedValidators.isOnlychar = (value) => /^[A-Za-z]/.test(value);

sharedValidators.isValidSubjectLength = (value) => value.length <= 100

sharedValidators.isValidMessageLength = (value) => value.length <= 500

sharedValidators.isNumber = (value) => /^[0-9]*$/.test(value)

module.exports = sharedValidators;
