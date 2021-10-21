const mongoose = require("mongoose");
const icecreamSchema = mongoose.Schema(
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
