const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
      type: String,
      required: true,
  },
  messaggio: {
    type: String,
    required: true,
  },
  // oraDiInvio: {
  //   type: String,
  //   required: true,
  // }
})

const MessaggiCollection = mongoose.model('messaggicollections', schema);

module.exports = MessaggiCollection;
