const express = require("express");
const Server = express.Router();
const {
  createAquaInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoices,
  sendIndividualInvoice,
  sendIndividualInvoiceByInvoiceNo,
} = require("../Controllers/AquaInvoice");

// //get
Server.get("/aqua-invoices" , getInvoices)
// //post
Server.post("/aquainvoice-create", createAquaInvoice);

// //put
// Server.put("/invoice-update/:name", updateInvoice);

// //delete

// Server.delete("/invoice-delete/:name", deleteInvoice);

// //search
// Server.get("/individualinvoice/:name", sendIndividualInvoice);
// Server.get("/individualinvoice/:invoice", sendIndividualInvoiceByInvoiceNo);

module.exports = Server;
