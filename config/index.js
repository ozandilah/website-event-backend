const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtExpiration: process.env.URL_JWT_EXPIRATION,
  jwtSecret: process.env.URL_JWT_SECRET_KEY,
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
};
