require("dotenv").config();
const jwt = require("jsonwebtoken");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const authenticateHospital = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Not authorized");
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    if ("hospital" != decoded.role)
      throw new UnauthenticatedError("Not Authorized");
    req.user = {
      userId: decoded.userId,
      account: decoded.account,
    };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not Authorized");
  }
};

module.exports = authenticateHospital;
