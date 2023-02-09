const mongoose = require("mongoose");

const stockSchema = mongoose.Schema(
  {
    stockCount: {
      type: Number,
    },
    stockDescription: {
      type: String,
    },
    kotakBalance: {
      type: String,
    },
    icicBalance: {
      type: String,
    },
    date: {
      type: String,
    },
    totalBalance: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stock", stockSchema);
