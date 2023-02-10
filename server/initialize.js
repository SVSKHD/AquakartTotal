const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

// app
const app = express();

// db
const DB = require("./DB/Db");
DB();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
readdirSync("./ECOM/routes").map((r) =>
  app.use("/api", require("./ECOM/routes/" + r))
);
//crm routes
readdirSync("./Crm/Routes").map((r) =>
  app.use("/crm", require("./Crm/Routes/" + r))
);


module.exports = app