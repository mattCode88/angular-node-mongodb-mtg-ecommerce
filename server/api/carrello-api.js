const express = require('express');
const router = express.Router();
const carrelloController = require('../controller/carrello-controller');

router.get('/cart/buy/:buyer', carrelloController.getCardToCart);

router.post('/cart/buy-card', carrelloController.addCardToCart);

router.put('/cart/modifica', carrelloController.updateCardToCart);

router.delete('/cart/delete/:id', carrelloController.deleteCardToCart);






module.exports = router;
