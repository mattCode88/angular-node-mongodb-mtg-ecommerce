const express = require('express');
const router = express.Router();
const cardController = require('../controller/card-controller');

router.post('/card/add', cardController.addCard);

router.get('/card/owner-card/:owner', cardController.getOwnerCard);

router.delete('/card/delete/:id', cardController.deleteCard);




module.exports = router;
