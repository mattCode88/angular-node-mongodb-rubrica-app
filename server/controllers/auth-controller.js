const UserCollection = require('../models/User');
const bcrypt = require('bcrypt');
const MyValidator = require('../validators/my-validator');

exports.createUser = async(req, res) => {

  if (req.body.username.length < 3 ||
    (MyValidator.validaEmail(req.body.email)) ||
    (MyValidator.validaPassword(req.body.password || req.body.password.length < 8))
  ) {
    const error = {
      status: true,
      message: 'Campi non validi'
    }
    return res.send(error)
  }

  const duplicateUser = await UserCollection.findOne({ username: req.body.username });

  if (duplicateUser !== null) {
    const error = {
      status: true,
      message: 'Username già registrato'
    }
    return res.send(error)
  }

  const duplicateUserEmail = await UserCollection.findOne({ email: req.body.email });

  if (duplicateUserEmail !== null) {
    const error = {
      status: true,
      message: 'Email già registrata'
    }
    return res.send(error)
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new UserCollection({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    isLogged: false,
  });

  user.save(user).then(data => res.send(data))

};

exports.logUser = async (req, res) => {

  if (!req.body.username || !req.body.password) {
    const error = {
      status: true,
      message: 'Campi non corretti'
    }
    return res.send(error)
  }

  const searchUser = await UserCollection.findOne({ username: req.body.username });

  if (searchUser === null) {
    const error = {
      status: true,
      message: 'Username errato.'
    }
    return res.send(error)
  }

  const boolPassword = bcrypt.compareSync(req.body.password, searchUser.password);

  if (boolPassword) {
    await UserCollection.updateOne({ username: req.body.username }, { isLogged: true })
    const error = {
      status: false,
      message: ''
    }
    return res.send(error)
  } else {
    const error = {
      status: true,
      message: 'Password errata.'
    }
    return res.send(error)
  }
}

exports.logout = async (req, res) => {
  await UserCollection.updateOne({ username: req.params.username }, { isLogged: false })
  res.send(true)
}

exports.getLogUsers = async (req, res) => {
  const users = await UserCollection.find({ isLogged: true });
  res.send(users)
}







