const AquaStock = require("../models/stock");
exports.deployedStock = async (req, res) => {
  const { stockName, stockCount, stockDescription, stockValue } = req.body;
  res.json(
    await new AquaStock({
      stockName,
      stockCount,
      stockDescription,
      stockValue,
    }).save()
  );
};

exports.getAllStock = async (req, res) => {
  let Stock = await AquaStock.find({});
  res.json(Stock);
};

exports.updateStock = async (req, res) => {
  try {
    const updated = await AquaStock.findOneAndUpdate(
      { stockName: req.params.name },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (error) {
    return res.status(400).json("updating stock failed")
  }
};

exports.deletedStock = (req, res) => {};
