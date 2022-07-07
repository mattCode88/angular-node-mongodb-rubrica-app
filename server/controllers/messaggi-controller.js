const MessaggiCollection = require('../models/Messaggi');

exports.createMessaggio = async (req, res) => {

  if (req.body.username === '' || req.body.messaggio === '') return;

  const dataDiInvio = new Date();
  // const ora = dataDiInvio.getHours() + ':' + dataDiInvio.getMinutes();
  const ora = `${+dataDiInvio.getHours() < 10 ? '0' + dataDiInvio.getHours() : dataDiInvio.getHours()}:${+dataDiInvio.getMinutes() < 10 ? '0' + dataDiInvio.getMinutes() : dataDiInvio.getMinutes()}`;
  const data = `${dataDiInvio.getDate()}/${dataDiInvio.getMonth() + 1}/${dataDiInvio.getFullYear()}`;

  const messaggio = new MessaggiCollection({
    username: req.body.username.toLowerCase(),
    messaggio: req.body.messaggio,
    oraDiInvio: ora,
    dataDiInvio: data
  })

  messaggio.save(messaggio).then(data => res.send(data));

}

exports.getMessaggi = async (req, res) => {

  const messaggi = await MessaggiCollection.find({});
  res.send(messaggi);

}
