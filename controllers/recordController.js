const recordService = require("../services/recordService");

const deleteRecord = async (req, res) => {
  const recordId = req.params["recordId"];
  await recordService.deleteRecord(recordId);
  res.status(200).json({ message: "recordDeleted" });
};

module.exports = {
  deleteRecord,
};
