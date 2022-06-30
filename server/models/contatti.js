const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cognome: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  indirizzo: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  dataDiNascita: {
    type: String,
  },
  riferimentoUser: {
    type: String,
    required: true,
  }
});

const ContattiCollection = mongoose.model('contatticollections', schema);

module.exports = ContattiCollection;
