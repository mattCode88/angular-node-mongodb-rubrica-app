const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');

router.post('/auth', authController.createUser);

router.get('/auth/:username', authController.getUser);

module.exports = router;
