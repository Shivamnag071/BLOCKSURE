const { BadRequestError, UnauthenticatedError } = require("../errors");
const UserPolicy = require("../models/UserPolicy");

const listing = async (req, res) => {
  const { name, insuranceId, company, coverage } = req.body;
  if (!name || !company || !coverage || !insuranceId) {
    throw new BadRequestError("Provide all info");
  }
  req.body.createdBy = req.user.userId;
  // console.log(req.user.userId);
  const item = await UserPolicy.create(req.body);
  res.status(201).json({ item });
};

const getAllPolicies = async (req, res) => {
  let queryProducts = {};
  queryProducts.createdBy = req.user.userId;
  let results = UserPolicy.find(queryProducts);

  // const page = parseInt(req.query.page) || 1;
  // const limit = parseInt(req.query.limit) || 10;
  // const skip = (page - 1) * limit;
  // results.skip(skip).limit(limit);

  const items = await results;
  res.status(200).json({ items });
};

const Get = async (req, res) => {
  res.status(201).json({ user: "User Function" });
};

module.exports = { Get, listing, getAllPolicies };
