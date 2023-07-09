const express = require("express");
const CategorieRoute = express.Router();
const { create, index, find, update, destroy } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");
CategorieRoute.get(
  "/categories",
  authenticateUser,
  authorizeRoles("organizer"),
  index
);
CategorieRoute.get(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  find
);
CategorieRoute.post(
  "/categories",
  authenticateUser,
  authorizeRoles("organizer"),
  create
);
CategorieRoute.put(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
CategorieRoute.delete(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);

module.exports = CategorieRoute;
