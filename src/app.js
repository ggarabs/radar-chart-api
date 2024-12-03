const express = require("express");
const morgan = require("morgan");
const chartRoutes = require("./routes/chartRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use("/api/chart", chartRoutes);

module.exports = app;
