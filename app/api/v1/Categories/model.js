const mongoose = require("mongoose");
const { model, Schema } = mongoose;
mongoose.Promise = global.Promise;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      minlength: [3, "Panjang nama kategori minimal 3 karakter"],
      maxlength: [20, "Panjang nama kategori maksimal 20 karakter"],
      required: [true, "Nama kategori harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Category || model("Category", categorySchema);
