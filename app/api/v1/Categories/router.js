const express = require("express");
const CategorieRoute = express.Router();
const { create, index, find, update, destroy } = require("./controller");
const { authenticateUser } = require("../../../middlewares/auth");

CategorieRoute.get("/categories", authenticateUser, index);
CategorieRoute.get("/categories/:id", find);
CategorieRoute.post("/categories", create);
CategorieRoute.put("/categories/:id", update);
CategorieRoute.delete("/categories/:id", authenticateUser, destroy);

module.exports = CategorieRoute;
