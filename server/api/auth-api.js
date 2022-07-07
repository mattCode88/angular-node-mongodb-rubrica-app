const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');

router.post('/auth/create', authController.createUser);

router.post('/auth/login', authController.logUser);

router.get('/auth/logout/:username', authController.logout);

router.get('/auth/users', authController.getLogUsers);

module.exports = router;
