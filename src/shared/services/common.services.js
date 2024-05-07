const crypto = require('crypto');

const commonServices = {};

commonServices.generateRandomString = async ({ length }) => {
    const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
    return randomBytes.toString('hex').slice(0, length);
}



module.exports = commonServices;