const express = require('express');
const router = express.Router();
const messaggiController = require('../controllers/messaggi-controller');

router.post('/crea-messaggio', messaggiController.createMessaggio);

router.get('/messaggi', messaggiController.getMessaggi);

module.exports = router;
