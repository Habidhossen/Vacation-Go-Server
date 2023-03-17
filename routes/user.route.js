const express = require("express");
const {
  createUser,
  getAllUsers,
  getAdmin,
  makeAdmin,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUsers);
router.get("/admin/:email", getAdmin);
router.put("/admin/:email", makeAdmin);

module.exports = router;
