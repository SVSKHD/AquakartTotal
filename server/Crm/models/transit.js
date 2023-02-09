const mongoose = require("mongoose");

const transitSchema = mongoose.Schema(
  {
    area: {
      type: String,
    },
    distance: {
      type: Number,
    },
    productDelivered: {
      type: String,
    },
    labour: {
      type: String,
    },
    date: {
      type: String,
    },
    paymentStatus: {
      type: Boolean,
    },
    paidAmount: {
      type: String,
    },
    paymentMode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transit", transitSchema);
