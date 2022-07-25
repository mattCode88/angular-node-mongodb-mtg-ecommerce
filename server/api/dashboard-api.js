const express = require('express');
const router = express.Router();
const dashboardController = require('../controller/dashboard-controller');

router.get('/dashboard/user/:username', dashboardController.getInfoUser);

module.exports = router;
