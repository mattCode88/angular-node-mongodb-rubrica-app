const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');

router.post('/auth/create', authController.createUser);

router.post('/auth/login', authController.logUser)

module.exports = router;
