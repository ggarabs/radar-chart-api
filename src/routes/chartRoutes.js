const express = require('express');
const router = express.Router();
const chartController = require('../controllers/chartController');

router.post('/generate-chart', chartController.generateChart);

module.exports = router;
