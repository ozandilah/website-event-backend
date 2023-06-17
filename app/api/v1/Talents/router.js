const express = require("express");
const TalentRouter = express.Router();

TalentRouter.get("/talents", (req, res) => {
  res.status(200).json({
    message: "Halaman Talents",
  });
});

module.exports = TalentRouter;
