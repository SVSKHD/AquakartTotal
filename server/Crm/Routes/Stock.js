const express = require("express");
const Router = express.Router();
const {deployedStock , getAllStock , updateStock} = require("../Controllers/stock")


//stock routes
Router.get("/get-allstocks", getAllStock); //stock and balance data
Router.post("/create-stock" , deployedStock); //post data for stock and balance everyday.
Router.put("/stock/:name" , updateStock); //update the status of the stock
Router.delete("/stock/:name"); //get stock certain model

module.exports = Router;
