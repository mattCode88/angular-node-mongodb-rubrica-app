const UserCollection = require('../models/User');
const bcrypt = require('bcrypt');
const PasswordValidator = require('../validators/password-validator');

exports.createUser = async(req, res) => {

  if (req.body.username.length < 3) return
  if (!req.body.email.includes('@') && !req.body.email.includes('.')) return
  if (PasswordValidator.validaPassword(req.body.password) || req.body.password.length < 8) return

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new UserCollection({
    username: req.body.username,
    email: req.body.email,
    // password: req.body.password
    password: hashedPassword
  });

  user.save(user).then(data => res.send(data))

};

exports.findUser = async (req, res) => {
  const duplicateUser = await UserCollection.findOne({ username: req.params.username });
  duplicateUser !== null ? res.send(true) : res.send(false);
}

exports.findUserEmail = async (req, res) => {
  const duplicateUserEmail = await UserCollection.findOne({ email: req.params.email });
  duplicateUserEmail !== null ? res.send(true) : res.send(false);
}

exports.verifyPasswd = async (req, res) => {
  const searchUser = await UserCollection.findOne({ username: req.body.username });
  const bool = bcrypt.compareSync(req.body.password, searchUser.password);
  if (bool) {
      res.send(true)
  } else {
    res.send(false)
    }
}




