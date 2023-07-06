const { createImages } = require("../../../services/mongoose/image");
const { StatusCodes } = require("http-status-codes");

const createImage = async (req, res, next) => {
  try {
    console.log("====================================");
    console.log("req.file");
    console.log(req.file);
    console.log("====================================");
    const result = await createImages(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createImage,
};
