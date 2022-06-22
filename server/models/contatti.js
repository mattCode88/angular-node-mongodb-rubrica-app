const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }

});

const ContattiCollection = mongoose.model('contatticollections', schema);

module.exports = ContattiCollection;
