const express = require("express");
const EventRoute = express();
const { create, index, find, update, destroy } = require("./controller");

EventRoute.get("/events", index);
EventRoute.get("/events/:id", find);
EventRoute.put("/events/:id", update);
EventRoute.delete("/events/:id", destroy);
EventRoute.post("/events", create);

module.exports = EventRoute;
