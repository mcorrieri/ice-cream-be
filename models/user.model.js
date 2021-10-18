const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = newSchema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
