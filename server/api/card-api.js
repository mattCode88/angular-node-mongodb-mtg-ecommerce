const express = require('express');
const router = express.Router();
const cardController = require('../controller/card-controller');

router.post('/card/add', cardController.addCard);




module.exports = router;
