const express = require("express");
const { createImage } = require("./controller");
const upload = require("../../../middlewares/multer");
const ImageRoute = express.Router();

ImageRoute.post("/images", upload.single("avatar"), createImage);

module.exports = ImageRoute;
