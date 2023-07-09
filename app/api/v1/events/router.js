const express = require("express");
const EventRoute = express();
const {
  create,
  index,
  find,
  update,
  destroy,
  changeStatus,
} = require("./controller");

const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

EventRoute.get("/events", authenticateUser, authorizeRoles("organizer"), index);
EventRoute.get(
  "/events/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  find
);
EventRoute.put(
  "/events/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
EventRoute.delete(
  "/events/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);
EventRoute.post(
  "/events",
  authenticateUser,
  authorizeRoles("organizer"),
  create
);

EventRoute.put(
  "/events/:id/status",
  authenticateUser,
  authorizeRoles("organizer"),
  changeStatus
);
module.exports = EventRoute;
