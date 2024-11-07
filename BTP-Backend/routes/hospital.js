const {
  Get,
  addRecord,
  getMyRecords,
  getYourListedRecords,
} = require("../controllers//hospital");
const express = require("express");
const authenticateHospital = require("../middlewares/authenticateHospital");
const router = express.Router();

router.route("/").get(authenticateHospital, Get);
router.route("/addRecord").post(authenticateHospital, addRecord);
router
  .route("/getListedRecords")
  .get(authenticateHospital, getYourListedRecords);
router.route("/getMyRecords").get(getMyRecords);

module.exports = router;
