const tableSchema = require("../Modals/tableModel");

const getTableData = async (req, res) => {
  const myData = await tableSchema.find();
  res.status(200).json({ myData });
};

module.exports = getTableData;
