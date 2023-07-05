var Categories = require("../../api/v1/Categories/model");
const { BadRequestError, NotFoundError } = require("../../errors");
const getAllCategories = async () => {
  const result = await Categories.find();
  return result;
};

const createCategories = async (req) => {
  const { name } = req.body;
  const check = await Categories.findOne({ name });
  if (check) {
    throw new BadRequestError("Nama Kategori Duplikat");
  }
  const result = await Categories.create({ name });
  return result;
};

const getOneCategories = async (req) => {
  const { id } = req.params;

  const result = await Categories.findOne({ _id: id });
  if (!result) {
    throw new NotFoundError(`Tidak ada Kategori dengan ID : ${id}`);
  }
  return result;
};

module.exports = {
  getAllCategories,
  createCategories,
  getOneCategories,
};
