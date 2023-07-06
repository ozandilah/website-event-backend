const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api-error");

class UnauthenticatedErrror extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.UNAUTHORIZED;
  }
}
module.exports = UnauthenticatedErrror;
