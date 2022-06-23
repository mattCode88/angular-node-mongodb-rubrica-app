const UserCollection = require('../models/user');
const bcrypt = require('bcrypt');
const PasswordValidator = require('../validators/password-validator');

exports.createUser = async(req, res) => {
  console.log(req.body)

  if(req.body.username.length < 3) return
  if (!req.body.email.includes('@') && !req.body.email.includes('.')) return
  if (PasswordValidator.validaPassword(req.body.password) || req.body.password.length < 8) {
    return
  }

  const duplicateUser = await UserCollection.findOne({ username: req.body.username });
  const duplicateEmail = await UserCollection.findOne({ email: req.body.email });

  if (duplicateUser !== null) {
    res.send(false)
    return
  }

  if (duplicateEmail !== null) {
    res.send(false)
    return
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new UserCollection({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
    // password: hashedPassword
  });

  user.save(user).then(data => res.send(data))

};

exports.getUser = async (req, res) => {

  const duplicateUser = await UserCollection.findOne({ username: req.params.username });

  res.send(duplicateUser);

};


