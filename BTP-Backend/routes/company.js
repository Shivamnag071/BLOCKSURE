const {
  Get,
  listing,
  getAllPolicies,
  getYourListedPolicies,
  getPolicy,
} = require("../controllers/company");

const express = require("express");
const authenticateCompany = require("../middlewares/authenticateCompany");
const router = express.Router();

router.route("/").get(authenticateCompany, Get);
router.route("/listPolicy").post(authenticateCompany, listing);
router.route("/policies").get(getAllPolicies);
router.route("/myPolicies").get(authenticateCompany, getYourListedPolicies);
router.route("/policies/:id").get(getPolicy);

module.exports = router;
