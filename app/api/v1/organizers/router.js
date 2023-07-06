const express = require("express");
const OrganizerRoute = express.Router();
const { create } = require("./controller");

OrganizerRoute.post("/organizer", create);

module.exports = OrganizerRoute;
