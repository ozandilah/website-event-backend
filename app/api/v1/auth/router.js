const express = require("express");
const { signInCMS } = require("./controller");
const AuthRoute = express.Router();

AuthRoute.post("/auth/sigin", signInCMS);
module.exports = AuthRoute;
