const express = require('express');
const router = express.Router();
const dashboardController = require('../controller/dashboard-controller');

router.get('/dashboard/user/:username', dashboardController.getInfoUser);

router.post('/dashboard/order/create', dashboardController.createNewOrder);

router.get('/dashboard/order/get/:owner', dashboardController.getOrderBySeller);

router.get('/dashboard/order/get/buyer/:buyer', dashboardController.getOrderByBuyer);

module.exports = router;
