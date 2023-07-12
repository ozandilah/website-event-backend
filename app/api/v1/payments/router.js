const express = require("express");
const paymentsRoute = express();
const { create, index, find, update, destroy } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

paymentsRoute.get(
  "/payments",
  authenticateUser,
  authorizeRoles("organizer"),
  index
);
paymentsRoute.get(
  "/payments/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  find
);
paymentsRoute.put(
  "/payments/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
paymentsRoute.delete(
  "/payments/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);
paymentsRoute.post(
  "/payments",
  authenticateUser,
  authorizeRoles("organizer"),
  create
);

module.exports = paymentsRoute;
