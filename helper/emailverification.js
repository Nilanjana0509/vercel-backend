//This Function Validates the email
const validator = require('email-validator');

const verify=(email)=>{
    const isValid = validator.validate(email);

    if (isValid) {
      return true;
    } else {
      return false;
    }
};
module.exports = verify;
