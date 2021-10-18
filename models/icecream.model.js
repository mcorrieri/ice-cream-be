const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const icecreamSchema = newSchema(
  {
    flavor: { type: String, required: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Icecream = mongoose.model("Icecream", icecreamSchema);

module.exports = Icecream;
