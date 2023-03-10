const express = require("express");
const {
  createService,
  getAllServices,
  getOneService,
  deleteOneService,
} = require("../controllers/service.controller");
const router = express.Router();

router.post("/service", createService);
router.get("/service", getAllServices);
router.get("/service/:id", getOneService);
router.delete("/service/:id", deleteOneService);

module.exports = router;
