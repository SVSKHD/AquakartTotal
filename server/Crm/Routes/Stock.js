const express = require("express");
const Router = express.Router();

//billing routes
Router.get("/billing"); //get data of the billing
Router.post("/billing"); //create the billing
Router.put("/billing"); //update the billing the materils

//stock and balance routes
Router.get("/stockandBalance"); //stock and balance data
Router.post("/stockandbalace"); //post data for stock and balance everyday.
Router.put("/stockandbalance"); //update the status of the stock

module.exports = Router;
