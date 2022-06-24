const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  },
  cognome: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  indirizzo: {
    type: String,
  },
  email: {
    type: String,
  },
  dataDiNascita: {
    type: Date,
  },
  riferimentoUser: {
    type: String,
    required: true,
  }
});

const ContattiCollection = mongoose.model('contatticollections', schema);

module.exports = ContattiCollection;
