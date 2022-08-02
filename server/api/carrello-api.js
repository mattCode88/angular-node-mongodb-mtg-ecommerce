const express = require('express');
const router = express.Router();
const carrelloController = require('../controller/carrello-controller');

router.get('/cart/buy/:buyer', async (req, res) => { });

router.post('/cart/buy-card', carrelloController.addCardToCart);





module.exports = router;
