const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  destinatario: {
    type: String,
    required: true,
  },
  destinatarioId: {
    type: String,
    required: true,
  },
  messaggio: {
    type: String,
    required: true,
  },
  oraDiInvio: {
    type: String,
    required: true,
  },
  dataDiInvio: {
    type: String,
    required: true,
  }
})

const DirectCollection = mongoose.model('directcollections', schema);

module.exports = DirectCollection;
