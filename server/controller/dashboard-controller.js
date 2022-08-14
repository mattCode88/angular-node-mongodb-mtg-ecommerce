const UserCollection = require('../model/User');
const OrderCollection = require('../model/Order');
const bcrypt = require('bcrypt');

exports.getInfoUser = async (req, res) => {

  const shearchedUser = await UserCollection.findOne({ username: req.params.username });

  if (shearchedUser === null) res.status(404).send('Utente non trovato');

  res.send(shearchedUser);

}

exports.createNewOrder = async (req, res) => {

  if (req.body) {

    let cards = [];
    let totalSeller = [];

    req.body.forEach(card => {
      if (!totalSeller.includes(card.owner)) totalSeller.push(card.owner);
      let newCard = {
        owner: card.owner,
        name: card.name,
        colors: card.colors,
        image: card.image,
        text: card.text,
        types: card.types,
        set: card.set,
        rarity: card.rarity,
        mana: card.mana,
        price: card.price,
        buyQuantity: card.buyQuantity,
        fidelity: card.fidelity,
        power: card.power,
        toughness: card.toughness,
      }
      cards.push(newCard);
    })

    const newOrder = new OrderCollection({
      buyer: req.body[0].buyer,
      shipped: req.body[0].shipped,
      receipts: req.body[0].receipts,
      order: req.body[0].order,
      chooseSchipment: req.body[0].chooseSchipment,
      totalPrice: req.body[0].totalPrice,
      totalSeller: Number(totalSeller.length),
      sellerConfirm: [],
      cards: cards
    })

    newOrder.save(newOrder).then(data => {
      if(!data){
        res.status(404).send({ message : `Ordine non effettuato`})
      }else{
        res.send(true)
      }
    }).catch(err =>{
        res.status(500).send({
          message: "Errore nell' aggiornamento delle informazioni!"
        });
      });

  }

}

exports.getOrderBySeller = async (req, res) => {

  const ownerParam = req.params.owner;
  const orderCardByOwner = await OrderCollection.find({ "cards.owner": ownerParam });
  let sellArray = [];

  orderCardByOwner.forEach(order => {

    let obj = {}, workArray = [];

    obj.order = order.order;

    if (order.cards) {
      workArray = order.cards.filter(card => card.owner === ownerParam);
      obj.cards = workArray;
    }

    sellArray.push(obj);

  })

  res.send(sellArray)
}

exports.getOrderByBuyer = async (req, res) => {
  if (req.params.buyer) {
    const buyer = req.params.buyer;
    const orderCardByBuyer = await OrderCollection.find({ buyer: buyer, shipped: false });
    res.send(orderCardByBuyer)
  }

}
