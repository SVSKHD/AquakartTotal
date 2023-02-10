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

exports.getAllStock =async (req,res) =>{
let Stock = await AquaStock.find({})
res.json(Stock)
}

exports.updateStock = (req, res) => {};

exports.deletedStock = (req, res) => {};
