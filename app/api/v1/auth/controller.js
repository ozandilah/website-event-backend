const { signin } = require("../../../services/mongoose/auth");
const { StatusCodes } = require("http-status-codes");

const signInCMS = async (req, res, next) => {
  try {
    const result = await signin(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { signInCMS };
