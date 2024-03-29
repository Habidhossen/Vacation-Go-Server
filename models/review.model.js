const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    msg: {
      type: String,
      required: [true, "Enter review!"],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, "Please provide price!"],
      max: [5, "Rating will maximum 5"],
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
