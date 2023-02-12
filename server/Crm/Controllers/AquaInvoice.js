const AquaInvoice = require("../models/AquaInvoices");
const id = require("shortid");
const shortid = require("shortid");

exports.createAquaInvoice = async (req, res) => {
  const Months = [
    "jan",
    "feb",
    "mar",
    "Aip",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const Month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  const MonthName = Months[Month];
  const todaysDate = `${day}/${Month}/${year}`;
  let id = `AQB-${todaysDate}-${shortid.generate()}`;

  try {
    const {
      name,
      phone,
      address,
      email,
      //gst
      gst,
      gstNo,
      gstAddress,
      gstEmail,
      gstName,
      //product
      productName,
      productPrice,
      productQuantity,
      productSerialNo,
      //payment
      paymentType,
      paymentDetails,
      paidAmount,
      deliveredBy,
      deliveryStatus,
    } = req.body;
    let basePrice = Math.floor(productPrice * 0.8474594);
    let productGST = Math.floor(basePrice * 0.18);
    let totalProductValue = Math.floor(basePrice + productGST);
    let newInvoice = await new AquaInvoice({
        //customer
        name,
        phone,
        address,
        email,
        //gst
        gst,
        gstNo,
        gstAddress,
        gstEmail,
        gstName,
        //product
        productName,
        productPrice: totalProductValue,
        productQuantity,
        productSerialNo,
        productBasePrice: basePrice,
        productGST: productGST,
        //payment
        paymentType,
        paymentDetails,
        paidAmount,
        deliveredBy,
        deliveryStatus,
        date: todaysDate,
        invoiceSerialNo: id,
      }).save()
    res.json(newInvoice);
  } catch (err) {
    console.log(err);
    res.status(400).send("Creating Your Crm Invoice Failed");
  }
};

exports.updateInvoice = async (req, res) => {
  try {
    const {
      name,
      phone,
      address,
      email,
      //gst
      gst,
      gstNo,
      gstAddress,
      gstEmail,
      gstName,
      //product
      productName,
      productPrice,
      productQuantity,
      productSerialNo,
      //payment
      paymentType,
      paymentDetails,
      paidAmount,
      deliveredBy,
      deliveryStatus,
    } = req.body;
    const updated = await AquaInvoice.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("Contact UPDATE ERROR ----> ", err);
    // return res.status(400).send("Product update failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.deleteInvoice = async (req, res) => {
  try {
    const deleted = await AquaInvoice.findOneAndRemove({
      name: req.params.name,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Invoice delete failed");
  }
};

exports.getInvoices = async (req, res) => {
  let Invoices = await AquaInvoice.find({})
    .sort([["createdAt", "desc"]])
    .exec();
  res.json(Invoices);
};

const handleName = async (req, res, query) => {
  const InvoiceName = await AquaInvoice.find({ name: query }).exec();
  res.json(InvoiceName);
};
const handleEmail = async (req, res, query) => {
  const InvoiceEmail = await AquaInvoice.find({ email: query }).exec();
  res.json(InvoiceEmail);
};

const handleProduct = async (req, res, query) => {
  const InvoiceProduct = await AquaInvoice.find({ product: query }).exec();
  res.json(InvoiceProduct);
};

const handleType = async (req, res, query) => {
  const InvoiceType = await AquaInvoice.find({ type: query }).exec();
  res.json(InvoiceType);
};

const handlePhone = async (req, res, query) => {
  const InvoicePhone = await AquaInvoice.find({ phone: query }).exec();
  res.json(InvoicePhone);
};

const handlePrice = async (req, res, query) => {
  const InvoicePrice = await AquaInvoice.find({ price: query }).exec();
  res.json(InvoicePrice);
};

exports.sendIndividualInvoice = async (req, res) => {
  let name = req.params.name;
  const invoiceData = await AquaInvoice.find({ name: name }).exec();
  res.json(invoiceData);
};

exports.sendIndividualInvoiceByInvoiceNo = async (req, res) => {
  let invoice = req.params.invoice;
  const invoiceData = await AquaInvoice.find({ invoiceSerialNo: invoice }).exec();
  res.json(invoiceData);
};

exports.filters = async (req, res) => {
  const { name, email, phone, type, product, price } = req.body;

  if (name) {
    await handleName(req, res, name);
  }
  if (email) {
    await handleEmail(req, res, email);
  }
  if (product) {
    await handleProduct(req, res, product);
  }
  if (phone) {
    await handlePhone(req, res, phone);
  }
  if (type) {
    await handleType(req, res, type);
  }
  if (price) {
    await handlePrice(req, res, price);
  }
};
