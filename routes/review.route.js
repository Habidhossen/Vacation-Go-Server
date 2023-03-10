const express = require("express");
const {
  createReview,
  getAllReviews,
} = require("../controllers/review.controller");
const router = express.Router();

router.post("/review", createReview);
router.get("/review", getAllReviews);

module.exports = router;
