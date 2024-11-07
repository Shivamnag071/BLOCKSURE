const { BadRequestError, UnauthenticatedError } = require("../errors");
const MedicalRecord = require("../models/Record");

const addRecord = async (req, res) => {
  const { name, citizenID, diagnosis, bill, hospital } = req.body;
  if (!name || !citizenID || !diagnosis || !bill || !hospital) {
    throw new BadRequestError("Provide all info");
  }
  req.body.createdBy = req.user.userId;
  // console.log(req.user.userId);
  const item = await MedicalRecord.create(req.body);
  res.status(201).json({ item });
};

const getYourListedRecords = async (req, res) => {
  let queryProducts = {};
  queryProducts.createdBy = req.user.userId;
  const items = await MedicalRecord.find(queryProducts);
  res.status(200).json({ items });
};

const getMyRecords = async (req, res) => {
  let queryProducts = {};

  const { name, citizenID } = req.query;
  if (name) {
    queryProducts.name = { $regex: name, $options: "i" };
  }
  if (citizenID) {
    queryProducts.citizenID = citizenID;
  }

  let results = MedicalRecord.find(queryProducts);

  // const page = parseInt(req.query.page) || 1;
  // const limit = parseInt(req.query.limit) || 10;
  // const skip = (page - 1) * limit;
  // results.skip(skip).limit(limit);

  const items = await results;
  res.status(200).json({ items });
};

const Get = async (req, res) => {
  res.status(201).json({ user: "Hospital Function" });
};

module.exports = { Get, addRecord, getMyRecords, getYourListedRecords };
