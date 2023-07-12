const express = require("express");
const participantsRoute = express();
const {
  signup,
  activeParticipant,
  signin,
  getAllLandingPage,
  getDetailLandingPage,
  getDashboard,
  checkout,
  getAllPayment,
} = require("./controller");

const { authenticateParticipant } = require("../../../middlewares/auth");

participantsRoute.post("/auth/signup", signup);
participantsRoute.post("/auth/signin", signin);
participantsRoute.put("/active", activeParticipant);
participantsRoute.get("/events", getAllLandingPage);
participantsRoute.get("/events/:id", getDetailLandingPage);
participantsRoute.get(
  "/payments/:organizer",
  authenticateParticipant,
  getAllPayment
);
participantsRoute.get("/orders", authenticateParticipant, getDashboard);
participantsRoute.post("/checkout", authenticateParticipant, checkout);

module.exports = participantsRoute;
