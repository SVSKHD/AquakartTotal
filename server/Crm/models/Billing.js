const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const billingSchema = mongoose.Schema(
  {
    billingDate: {
      type: Number,
    },
    billedAmount: {
      type: String,
    },
    transferredAmount: {
      type: String,
    },
    stock: {
      type: ObjectId,
      ref: "Stock",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Billing", billingSchema);
