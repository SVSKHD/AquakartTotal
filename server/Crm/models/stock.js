const mongoose = require("mongoose");

const stockSchema = mongoose.Schema(
  {
    stockName: {
      type: String,
    },
    stockCount: {
      type: Number,
    },
    stockDescription: {
      type: String,
    },
    stockValue: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AquaStock", stockSchema);
