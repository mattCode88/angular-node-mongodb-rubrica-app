const express = require('express');
const router = express.Router();
const directController = require('../controllers/direct-controller');

router.get('/direct/:id', directController.getNomeDestinatario);

router.get('/direct/contatti/:username', directController.getContattiDirect);

router.post('/direct/crea-direct', directController.createDirect);



module.exports = router;
