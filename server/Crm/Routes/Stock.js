const express = require("express");
const Router = express.Router();
const {deployedStock , getAllStock} = require("../Controllers/stock")
//billing routes
Router.get("/billing"); //get data of the billing
Router.post("/billing"); //create the billing
Router.put("/billing"); //update the billing the materils

//stock and balance routes
Router.get("/stock" , getAllStock); //stock and balance data
Router.post("/stock" , deployedStock); //post data for stock and balance everyday.
Router.put("/stock/:name" , ); //update the status of the stock
Router.get("/stock/:name"); //get stock certain model

module.exports = Router;
