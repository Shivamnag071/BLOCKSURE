const PolicyListing = require("../models/Policy");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const listing = async (req, res) => {
  const { name, company, coverage, price } = req.body;
  if (!name || !company || !coverage || !price) {
    throw new BadRequestError("Provide all info");
  }
  req.body.createdBy = req.user.userId;
  // console.log(req.user.userId);
  const item = await PolicyListing.create(req.body);
  res.status(201).json({ item });
};

const getAllPolicies = async (req, res) => {
  let queryProducts = {};
  let results = PolicyListing.find(queryProducts);

  // const page = parseInt(req.query.page) || 1;
  // const limit = parseInt(req.query.limit) || 10;
  // const skip = (page - 1) * limit;
  // results.skip(skip).limit(limit);

  const items = await results;
  res.status(200).json({ items });
};

const getPolicy = async (req, res) => {
  const { id: policyId } = req.params;
  const policy = await PolicyListing.findById({ _id: policyId });
  if (!policy) {
    throw new BadRequestError("No policy found");
  }
  res.status(200).json({ policy });
};

const getYourListedPolicies = async (req, res) => {
  let queryProducts = {};
  queryProducts.createdBy = req.user.userId;
  const items = await PolicyListing.find(queryProducts);
  res.status(200).json({ items });
};

const Get = async (req, res) => {
  res.status(201).json({ user: "Company Function" });
};

module.exports = {
  Get,
  listing,
  getAllPolicies,
  getYourListedPolicies,
  getPolicy,
};
