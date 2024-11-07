const { Get, listing, getAllPolicies } = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.route("/").get(Get);
router.route("/createPolicy").post(listing);
router.route("/policies").get(getAllPolicies);

module.exports = router;
