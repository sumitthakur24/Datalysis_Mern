const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./Routes/route.js");
const app = express();

//database
const connectDB = require("./db/connectDB");
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/v1", routes);

//server listening
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
