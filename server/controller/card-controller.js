const CardCollection = require('../model/Card');
const MyValidator = require('../validators/my-validator');

exports.addCard = async (req, res) => {

  const card = new CardCollection({
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
