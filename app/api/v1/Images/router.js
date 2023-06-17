const express = require("express");
const ImageRoute = express.Router();

ImageRoute.get("/img", (req, res) => {
  res.status(200).json({
    message: "Halaman Image",
  });
});

module.exports = ImageRoute;
