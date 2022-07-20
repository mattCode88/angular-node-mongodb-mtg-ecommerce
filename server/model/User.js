const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
    unique: true
  },
  nome: {
    type: String,
    required: true,
  },
  cognome: {
    type: String,
    required: true,
  },
  via: {
    type: String,
    required: true,
  },
  nCivico: {
    type: String,
    required: true,
  },
  cap: {
    type: String,
    required: true,
  },
  citta: {
    type: String,
    required: true,
  },
  nazione: {
    type: String,
    required: true,
  },
  dataIscrizione: {
    type: String,
    required: true,
  },
  isLogged: {
    type: Boolean,
    required: true,
  }
});

const UserCollection = mongoose.model('usercollections', schema);

module.exports = UserCollection;
