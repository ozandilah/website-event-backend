const mongoose = require("mongoose");
const { model, Schema } = mongoose;
mongoose.Promise = global.Promise;

const organizerschema = new Schema(
  {
    organizer: {
      type: String,
      required: [true, "Penyelenggara Harus Di Isi!"],
    },
  },
  { timestamps: true }
);

module.exports = model("Organizer", organizerschema);
