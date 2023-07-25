const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const CategorieRoute = require("./app/api/v1/categories/router");
const ImageRoute = require("./app/api/v1/images/router");
const TalentRoute = require("./app/api/v1/talents/router");
const EventRoute = require("./app/api/v1/events/router");
const OrganizerRoute = require("./app/api/v1/organizers/router");
const participantsRoute = require("./app/api/v1/participants/router");

const AuthRoute = require("./app/api/v1/auth/router");
const app = express();

// router

const v1 = "/api/v1";

const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");
const OrdersRoute = require("./app/api/v1/orders/router");
const paymentsRoute = require("./app/api/v1/payments/router");

app.use(cors());
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

app.use(`${v1}/cms`, CategorieRoute);
app.use(`${v1}/cms`, ImageRoute);
app.use(`${v1}/cms`, TalentRoute);
app.use(`${v1}/cms`, EventRoute);
app.use(`${v1}/cms`, OrganizerRoute);
app.use(`${v1}/cms`, AuthRoute);
app.use(`${v1}/cms`, OrdersRoute);
app.use(`${v1}`, participantsRoute);
app.use(`${v1}/cms`, paymentsRoute);
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
