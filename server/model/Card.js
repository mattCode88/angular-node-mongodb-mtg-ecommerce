const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  identity: {
    type: String,
    required: true,
  },
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
  quantity: {
    type: Number,
    required: true,
  },
  toSell: {
    type: Number,
    required: true,
  },
  sold: {
    type: Boolean,
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
});

const CardCollection = mongoose.model('cardcollection', schema);

module.exports = CardCollection;
