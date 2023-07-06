const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const CategorieRoute = require("./app/api/v1/categories/router");
const ImageRoute = require("./app/api/v1/images/router");
const TalentRoute = require("./app/api/v1/talents/router");
const EventRoute = require("./app/api/v1/events/router");
const OrganizerRoute = require("./app/api/v1/organizers/router");

const AuthRoute = require("./app/api/v1/auth/router");
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
app.use(v1, ImageRoute);
app.use(v1, TalentRoute);
app.use(v1, EventRoute);
app.use(v1, OrganizerRoute);
app.use(v1, AuthRoute);
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
