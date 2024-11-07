const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name"],
  },
  company: {
    type: String,
    required: [true, "Please Provide company"],
  },
  coverage: {
    type: Array,
    required: [true, "Please Provide policies"],
  },
  maxAmount: {
    type: Number,
    required: [true, "Please Provide amount"],
  },
  price: {
    type: Number,
    required: [true, "Provide amount"],
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
});

module.exports = mongoose.model("PolicyListing", policySchema);
