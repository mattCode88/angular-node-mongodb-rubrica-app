const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');

router.post('/auth/create', authController.createUser);

router.get('/auth/user/username/:username', authController.findUser);

router.get('/auth/user/email/:email', authController.findUserEmail);

router.post('/auth/user/password', authController.verifyPasswd);

module.exports = router;
