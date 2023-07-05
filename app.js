const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const CategorieRoute = require("./app/api/v1/categories/router");

const app = express();

// router

const v1 = "/api/v1/cms";

const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to API Semina",
  });
});

app.use(v1, CategorieRoute);
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
