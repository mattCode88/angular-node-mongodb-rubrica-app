const express = require('express');
const router = express.Router();
const contattiController = require('../controllers/contatti-controller');

router.post('/contatti/crea', contattiController.createContatto);

router.put('/contatti/modifica', contattiController.updateContatto);

router.get('/contatti/:username', contattiController.getContattiForUser);

router.delete('/contatti/delete/:id', contattiController.deleteContatto);


module.exports = router;
