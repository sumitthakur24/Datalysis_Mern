const express = require("express");
const router = express.Router();
const getTableData = require("../Controller/tableData");

router.get("/tabledata", getTableData);

module.exports = router;
