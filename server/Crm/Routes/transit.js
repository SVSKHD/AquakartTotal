const express = require("express");
const Router = express.Router();
const {getTransits , createTransit , updateTransit} = require("../Controllers/transit")

Router.get("/transits" , getTransits); //get all transports
Router.post("/transit/executed" , createTransit); //transport for the executed orders
Router.put("/transit/paymentStatus/:area" , updateTransit); //update payment status by admin

module.exports = Router;
