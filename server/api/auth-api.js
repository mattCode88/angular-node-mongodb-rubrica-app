const express = require('express');
const UserCollection = require('../models/user');
const router = express.Router();
const PasswordValidator = require('../validators/password-validator')



router.post('/auth', async(req, res) => {
  console.log(req.body)

  if(req.body.username.length < 3) return
  if (!req.body.email.includes('@') && !req.body.email.includes('.')) return
  if (PasswordValidator.validaPassword(req.body.password) || req.body.password.length < 8) {
    console.log('passwd')
    return
  }

  const duplicateUser = await UserCollection.findOne({ username: req.body.username });
  const duplicateEmail = await UserCollection.findOne({ email: req.body.email });

  if (duplicateUser !== null) {
    console.log('user già esistente')
    return
  }

  if (duplicateEmail !== null) {
    console.log('email già esistente')
    return
  }

 const user = new UserCollection({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  user.save(user).then(data => res.send(data))

});


module.exports = router;
