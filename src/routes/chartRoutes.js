const express = require("express");
const router = express.Router();
const chartController = require("../controllers/chartController");

router.get("/", chartController.getApiHealth);
router.post("/generate-chart", chartController.generateChart);

module.exports = router;
