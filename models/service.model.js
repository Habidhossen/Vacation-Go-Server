const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Please provide a description for this service!"],
      trim: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Please provide price!"],
      min: [0, "Price can't be negative"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
