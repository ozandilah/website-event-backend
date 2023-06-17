const express = require("express");
const CategorieRoute = express.Router();

CategorieRoute.get("/categories", (req, res) => {
  res.status(200).json({
    message: "Halaman Categories",
  });
});

module.exports = CategorieRoute;
