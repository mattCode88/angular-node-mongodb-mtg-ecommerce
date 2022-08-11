const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
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
  }
})

const OrderCollection = mongoose.model('ordercollection', schema);

module.exports = OrderCollection;
