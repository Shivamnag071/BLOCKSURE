const mongoose = require("mongoose");

const userPolicy = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name"],
  },
  insuranceId: {
    type: Number,
    required: [true, "Please Provide id"],
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
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
});

module.exports = mongoose.model("UserPolicy", userPolicy);
