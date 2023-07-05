const Categories = require("./model");
const {
  getAllCategories,
  createCategories,
  getOneCategories,
} = require("../../../services/mongoose/categori");

const create = async (req, res, next) => {
  try {
    const result = await createCategories(req);
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllCategories();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneCategories(req);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const result = await Categories.findByIdAndUpdate(
      { _id: id },
      { name },
      { new: true, runValidators: true }
    );

    if (!result)
      return res.status(404).json({
        message: "ID Categories Tidak Di temukan Gaes!",
      });
    res.status(200).json({
      data: result,
    });
  } catch (error) {}
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Categories.findOneAndRemove({ _id: id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  find,
  destroy,
  update,
  index,
  create,
};
