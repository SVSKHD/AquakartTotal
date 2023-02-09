const express = require("express");
const Server = express.Router();
const {
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoices,
  sendIndividualInvoice,
  sendIndividualInvoiceByInvoiceNo,
} = require("../Controllers/invoice");

//get
Server.get("/invoices", getInvoices);
//post
Server.post("/invoice-create", createInvoice);

//put
Server.put("/invoice-update/:name", updateInvoice);

//delete

Server.delete("/invoice-delete/:name", deleteInvoice);

//search
Server.get("/individualinvoice/:name", sendIndividualInvoice);
Server.get("/individualinvoice/:invoice", sendIndividualInvoiceByInvoiceNo);

module.exports = Server;
