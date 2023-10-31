const mongoose = require("mongoose");

URI =
  "mongodb+srv://admin:admin@tabledata.os81mj1.mongodb.net/TableData?retryWrites=true&w=majority";

const connectDB = () => {
  console.log("Database connected!!");
  return mongoose.connect(URI);
};

module.exports = connectDB;
