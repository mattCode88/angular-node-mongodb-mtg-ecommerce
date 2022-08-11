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
    const newOrder = new OrderCollection({
      owner: req.body.owner,
      buyer: req.body.buyer,
      shipped: req.body.shipped,
      receipts: req.body.receipts,
      order: req.body.order,
      chooseSchipment: req.body.chooseSchipment,
      totalPrice: req.body.totalPrice
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
