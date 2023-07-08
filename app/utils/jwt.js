const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiration } = require("../../config");
const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, jwtSecret, {
    expiresIn: jwtExpiration,
  });
  return token;
};

const isTokenValid = ({ token }) => {
  try {
    jwt.verify(token, jwtSecret);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  createJWT,
  isTokenValid,
};
