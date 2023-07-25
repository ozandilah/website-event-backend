const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtExpiration: process.env.URL_JWT_EXPIRATION,
  jwtSecret: process.env.URL_JWT_SECRET_KEY,

  jwtRefreshTokenSecret: process.env.URL_JWT_SECRET_KEY_REFRESH_TOKEN,
  jwtRefreshTokenExpiration: process.env.URL_EXPIRATION_REFRESH_TOKEN,

  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
};
