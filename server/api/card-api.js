const express = require('express');
const router = express.Router();
const cardController = require('../controller/card-controller');

router.post('/card/add', cardController.addCard);

router.post('/card/owner-card/card-name', cardController.getOwnerCardForCardName);

router.post('/card/owner-card/card-parameters', cardController.getOwnerCardForParameters);

router.get('/card/owner-card/:owner', cardController.getOwnerCard);

router.delete('/card/delete/:id', cardController.deleteCard);

router.put('/card/modifica', cardController.updateCard);




module.exports = router;
