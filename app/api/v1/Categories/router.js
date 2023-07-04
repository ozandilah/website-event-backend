const express = require("express");
const CategorieRoute = express.Router();
const { create, index, find, update, destroy } = require("./controller");
CategorieRoute.get("/categories", index);
CategorieRoute.get("/categories/:id", find);
CategorieRoute.post("/categories", create);
CategorieRoute.put("/categories/:id", update);
CategorieRoute.delete("/categories/:id", destroy);

module.exports = CategorieRoute;
