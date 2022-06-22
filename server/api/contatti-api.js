const express = require('express');
const ContattiCollection = require('../models/contatti');
const router = express.Router();



router.get('/contatti', async(req, res) => {
  const contatti = await ContattiCollection.find();
  res.send(contatti);
});


module.exports = router;
