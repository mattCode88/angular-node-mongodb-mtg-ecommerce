const express = require('express');
const router = express.Router();
const cardController = require('../controller/card-controller');

router.post('/card/add', cardController.addCard);

router.post('/card/owner-card/card-name', cardController.getOwnerCardForCardName);

router.post('/card/owner-card/card-parameters', cardController.getOwnerCardForParameters);

router.post('/card/not-owner-card/card-name', cardController.getCardForCardName);

router.post('/card/not-owner-card/card-parameters', cardController.getCardForParameters);

router.get('/card/all-card/card-name/:cardName', cardController.getAllCardForCardName);

router.post('/card/all-card/card-parameters', cardController.getAllCardForParameters);

router.get('/card/owner-card/my-cards/:owner', cardController.getOwnerCard);

router.get('/card/all-cards', cardController.getAllCards);

router.get('/card/all-cards/:username', cardController.getAllCardsExcludingUser);

router.delete('/card/delete/:id', cardController.deleteCard);

router.put('/card/modifica', cardController.updateCard);




module.exports = router;
