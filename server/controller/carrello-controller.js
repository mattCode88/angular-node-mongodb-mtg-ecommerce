const CarrelloCollection = require('../model/Carrello');
// const MyValidator = require('../validators/my-validator');

exports.addCardToCart = async (req, res) => {

  if (req.body) {

    const searchCard = await CarrelloCollection.find({ idCard: req.body.idCard });

    if (searchCard.length > 0) {
      const control = searchCard.filter(card => card.buyer === req.body.buyer);
      if (control.length > 0) {
        return res.send(false);
      }
    }

    const cardToBuy = new CarrelloCollection({
      idCard: req.body.idCard,
      owner: req.body.owner,
      name: req.body.name,
      colors: req.body.colors,
      image: req.body.image,
      text: req.body.text,
      types: req.body.types,
      set: req.body.set,
      rarity: req.body.rarity,
      mana: req.body.mana,
      price: req.body.price,
      quantity: req.body.quantity,
      buyQuantity: req.body.buyQuantity,
      buyer: req.body.buyer,
      fidelity: req.body.fidelity,
      power: req.body.power,
      toughness: req.body.toughness
    })

    cardToBuy.save(cardToBuy).then(data => res.send(true));

  }

}

exports.getCardToCart = async (req, res) => {

  if (req.params.buyer) {
    const buyersCards = await CarrelloCollection.find({ buyer: req.params.buyer });
    res.send(buyersCards)
  }

}

exports.updateCardToCart = async (req, res) => {
  CarrelloCollection.findByIdAndUpdate(req.body[1], req.body[0], { useFindAndModify: false })
      .then(data => {
          if (!data) {
              res.send(false)
          } else {
              res.send(true);
          }
      }).catch(err => {
          res.send(false)
      });
}

exports.deleteCardToCart = async (req, res) => {
  if (req.params.id) {
    CarrelloCollection.findByIdAndDelete(req.params.id)
    .then(data => {
      if(!data){
          res.status(404).send({ message : `La carta con id: ${req.params.id} non è stata trovata!`})
      }else{
        res.send(true)
      }
    })
    .catch(err =>{
      res.status(500).send({
          message: "Errore nell' aggiornamento delle informazioni!"
      });
    });
  }
}
