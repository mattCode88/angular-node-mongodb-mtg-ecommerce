const CardCollection = require('../model/Card');
const MyValidator = require('../validators/my-validator');

exports.addCard = async (req, res) => {

  const duplicateCard = await CardCollection.find({
    identity: req.body.identity,
    owner: req.body.owner,
    name: req.body.name,
    set: req.body.set
  })

  if (duplicateCard.length > 0) {
    const error = {
      status: true,
      message: 'Carta già presente in collezione'
    }
    return res.send(error);
  }

  const card = new CardCollection({
    identity: req.body.identity,
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
    toSell: req.body.toSell,
    sold: req.body.sold,
    fidelity: req.body.fidelity,
    power: req.body.power,
    toughness: req.body.toughness
  })

  card.save(card).then(data => res.send(data));

}

exports.getOwnerCard = async (req, res) => {

  const searchedCards = await CardCollection.find({ owner: req.params.owner });

  if (searchedCards.length === 0) {
    const error = {
      status: true,
      message: 'Nessuna carta presente in collezione'
    }
    return res.send(error);
  }

  res.send(searchedCards);

}

exports.deleteCard = async (req, res) => {

  CardCollection.findByIdAndDelete(req.params.id)
    .then(data => {
      if(!data){
          res.status(404).send({ message : `Il contatto con id: ${req.params.id} non è stata trovato!`})
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

exports.updateCard = async (req, res) => {

  // console.log(req.body[0].quantity)
  if (req.body[0].quantity === 0) {
    CardCollection.findByIdAndDelete(req.body[1])
    .then(data => {
      if(!data){
          res.status(404).send(false)
      }else{
        res.send(true)
      }
    })
    .catch(err =>{
      res.status(500).send({
          message: "Errore nell' aggiornamento delle informazioni!"
      });
    });
  } else {
    CardCollection.findByIdAndUpdate(req.body[1], req.body[0], { useFindAndModify: false })
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

}

exports.getOwnerCardForCardName = async (req, res) => {
  const searchCard = [];
  const ownerCard = await CardCollection.find({ owner: req.body[0] });

  ownerCard.forEach(card => {
    if (card.name.toLowerCase().includes(req.body[1].toLowerCase())) searchCard.push(card);
  })

  res.send(searchCard)
}

exports.getOwnerCardForParameters = async (req, res) => {

  let campiRichiesti = 0;
  let filterArray = [];
  for (let campo in req.body[1]) {
    if (req.body[1][campo] !== '' && req.body[1][campo] !== 'all') campiRichiesti++
  }
  const ownerCard = await CardCollection.find({ owner: req.body[0] });

  ownerCard.forEach(card => {
    let count = 0;
    if (req.body[1].color !== '' && req.body[1].color !== 'all') {
      card.colors.forEach(col => {
        if (req.body[1].color === col) {
          count++;
        }
      })
    }
    if (req.body[1].type !== '' && req.body[1].type !== 'all') {
      card.types.forEach(ty => {
        if (req.body[1].type === ty) {
          count++;
        }
      })
    }
    if (
      (req.body[1].set !== '' && req.body[1].set !== 'all') &&
      card.set === req.body[1].set
    ) count++;
    if (
      (req.body[1].rarity !== '' && req.body[1].rarity !== 'all') &&
      card.rarity === req.body[1].rarity
    ) count++;
    if (
      (req.body[1].mana !== '' && req.body[1].mana !== 'all') &&
      card.mana === Number(req.body[1].mana)
    ) count++;
    if (campiRichiesti === count) filterArray.push(card);
  })

  res.send(filterArray)

}



