const express = require("express");
const {
  createUser,
  getAdmin,
  makeAdmin,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/user", createUser);
router.get("/admin/:email", getAdmin);
router.put("/admin/:email", makeAdmin);

module.exports = router;
