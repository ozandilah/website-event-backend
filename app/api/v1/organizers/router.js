const express = require("express");
const OrganizerRoute = express.Router();
const {
  createCMSOrganizer,
  getCMSUsers,
  createCMSUser,
} = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

OrganizerRoute.post(
  "/organizer",
  authenticateUser,
  authorizeRoles("owner"),
  createCMSOrganizer
);

OrganizerRoute.post(
  "/users",
  authenticateUser,
  authorizeRoles("organizer"),
  createCMSUser
);

OrganizerRoute.get(
  "/users",
  authenticateUser,
  authorizeRoles("owner"),
  getCMSUsers
);

module.exports = OrganizerRoute;
