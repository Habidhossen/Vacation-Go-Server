const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db_conn");
const port = process.env.PORT || 4000;
const app = express();
const serviceRouter = require("./routes/service.route");
const reviewRouter = require("./routes/review.route");
const blogRouter = require("./routes/blog.route");
const bookingRouter = require("./routes/booking.route");
const userRouter = require("./routes/user.route");

// middleware
app.use(cors());
app.use(express.json());

// listening port
app.listen(port, () => {
  console.log("Listening on port", port);
});

// All Routes
app.use("/api", serviceRouter);
app.use("/api", reviewRouter);
app.use("/api", blogRouter);
app.use("/api", bookingRouter);
app.use("/api", userRouter);

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Vacation Go Server");
});

// If Route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found!",
  });
});

// if Server Error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something is broke!",
  });
});
