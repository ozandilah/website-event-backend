const express = require("express");
const TalentRoute = express();
const { create, index, find, update, destroy } = require("./controller");

const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

TalentRoute.get(
  "/talents",
  authenticateUser,
  authorizeRoles("organizer"),
  index
);
TalentRoute.get(
  "/talents/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  find
);
TalentRoute.put(
  "/talents/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
TalentRoute.delete(
  "/talents/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);
TalentRoute.post(
  "/talents",
  authenticateUser,
  authorizeRoles("organizer"),
  create
);

module.exports = TalentRoute;
