const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { model, Schema } = mongoose;
mongoose.Promise = global.Promise;

const usersSchema = new Schema(
  {
    name: {
      type: String,
      minlength: [3, "Panjang nama minimal 3 karakter"],
      maxlength: [20, "Panjang nama  maksimal 20 karakter"],
      required: [true, "Nama Harus Di Isi!"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email Harus Di Isi!"],
    },
    password: {
      type: String,
      required: [true, "Password Harus Di Isi!"],
    },
    role: {
      type: String,
      enum: ["admin", "organizer", "owner"],
      default: "admin",
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  { timestamps: true }
);
// pre itu hooks nya mongo
usersSchema.pre("save", async function (next) {
  const User = this;
  if (User.isModified("password")) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

usersSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);

  return isMatch;
};
module.exports = mongoose.models.Users || model("Users", usersSchema);
