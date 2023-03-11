const express = require("express");
const {
  createBooking,
  getAllBookings,
  getSpecificBooking,
  deleteBooking,
} = require("../controllers/booking.controller");

const router = express.Router();

router.post("/booking", createBooking);
router.get("/booking", getAllBookings);
router.get("/booking/:email", getSpecificBooking);
router.delete("/booking/:id", deleteBooking);

module.exports = router;
