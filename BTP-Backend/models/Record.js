const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name"],
  },
  citizenID: {
    type: Number,
    required: [true, "Please Provide ID"],
  },
  mrId: {
    type: Number,
    required: [true, "Please Provide ID"],
  },
  diagnosis: {
    type: Array,
    required: [true, "Please Provide diagnosis"],
  },
  bill: {
    type: Number,
    required: [true, "Please Provide bill"],
  },
  hospital: {
    type: String,
    required: [true, "Provide hospital name"],
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
});

module.exports = mongoose.model("MedicalRecords", recordSchema);
