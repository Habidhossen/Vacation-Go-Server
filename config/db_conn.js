const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3mjkw.mongodb.net/Vacation-Go?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    "Database Connection Failed: " + err;
  });
