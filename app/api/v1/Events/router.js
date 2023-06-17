const express = require("express");
const EventRoute = express.Router();

EventRoute.get("/event", (req, res) => {
  res.status(200).json({
    message: "Halaman Event",
  });
});

module.exports = EventRoute;
