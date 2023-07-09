const express = require("express");
const OrganizerRoute = express.Router();
const {
  createCMSOrganizer,
  getCMSUsers,
  createCMSUser,
} = require("./controller");
const { authenticateUser } = require("../../../middlewares/auth");

OrganizerRoute.post("/organizer", createCMSOrganizer);

OrganizerRoute.post("/users", authenticateUser, createCMSUser);

OrganizerRoute.get("/users", getCMSUsers);

module.exports = OrganizerRoute;
