const express = require('express');
const router = express.Router();
const contattiController = require('../controllers/contatti-controller');



router.get('/contatti/:username', contattiController.getUserForUsername);


module.exports = router;
