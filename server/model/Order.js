const mongoose = require('mongoose');

const cardSchema = {
  owner: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  types: {
    type: Array,
    required: true,
  },
  set: {
    type: String,
    required: true,
  },
  rarity: {
    type: String,
    required: true,
  },
  mana: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  buyQuantity: {
    type: Number,
    required: true,
  },
  fidelity: {
    type: String,
  },
  power: {
    type: String,
  },
  toughness: {
    type: String,
  }
}

const orderSchema = new mongoose.Schema({
  buyer: {
    type: String,
    required: true,
  },
  shipped: {
    type: Boolean,
    required: true,
  },
  receipts: {
    type: Boolean,
    required: true,
  },
  order: {
    type: String,
    required: true,
  },
  chooseSchipment: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  totalSeller: {
    type: Number,
    required: true,
  },
  sellerConfirm: {
    type: Array,
    required: true,
  },
  cards: [cardSchema]
})

const OrderCollection = mongoose.model('ordercollection', orderSchema);

module.exports = OrderCollection;
