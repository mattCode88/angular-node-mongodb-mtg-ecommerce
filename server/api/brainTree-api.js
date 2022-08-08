const express = require('express');
const router = express.Router();
const brainTreeController = require('../controller/brainTree-controller');

router.get('/token', brainTreeController.getToken);

router.post('/checkout', brainTreeController.checkout);

module.exports = router;
