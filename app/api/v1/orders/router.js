const express = require("express");
const OrdersRoute = express();
const { index } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

OrdersRoute.get(
  "/orders",
  authenticateUser,
  authorizeRoles("organizer", "admin", "owner"),
  index
);

module.exports = OrdersRoute;
