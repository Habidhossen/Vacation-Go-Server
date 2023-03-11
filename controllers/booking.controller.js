const Booking = require("../models/booking.model");

exports.createBooking = async (req, res) => {
  try {
    const bookingData = req.body;
    const booking = new Booking(bookingData);
    await booking.save();
    res.status(201).json({
      status: "success",
      message: "Data inserted successfully",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({
      status: "success",
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
exports.getSpecificBooking = async (req, res) => {
  try {
    const bookingEmail = req.params.email;
    const booking = await Booking.find({ userEmail: bookingEmail });
    res.status(200).json({
      status: "success",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
exports.deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    await Booking.findByIdAndDelete(bookingId);
    res.status(200).json({
      status: "success",
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
