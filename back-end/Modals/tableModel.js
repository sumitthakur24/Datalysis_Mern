const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  Year: Number,
  Sale: Number,
  Expenses: Number,
  Profit: Number,
});

module.exports = mongoose.model("ChartData", tableSchema);
