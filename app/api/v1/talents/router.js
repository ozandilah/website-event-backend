const express = require("express");
const TalentRoute = express();
const { create, index, find, update, destroy } = require("./controller");

TalentRoute.get("/talents", index);
TalentRoute.get("/talents/:id", find);
TalentRoute.put("/talents/:id", update);
TalentRoute.delete("/talents/:id", destroy);
TalentRoute.post("/talents", create);

module.exports = TalentRoute;
