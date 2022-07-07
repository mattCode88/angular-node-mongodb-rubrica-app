const ContattiCollection = require('../models/Contatti');
const DirectCollection = require('../models/Direct');

exports.getNomeDestinatario = async (req, res) => {
  const destinatario = await ContattiCollection.findById( req.params.id );
  if (destinatario) {
    res.send(destinatario)
  } else {
    return;
  }
}

exports.createDirect = async (req, res) => {
  // console.log(req.body)
  if (req.body.username === '' || req.body.messaggio === '' || req.body.destinatario === '') return;

  const dataDiInvio = new Date();
  const ora = `${+dataDiInvio.getHours() < 10 ? '0' + dataDiInvio.getHours() : dataDiInvio.getHours()}:${+dataDiInvio.getMinutes() < 10 ? '0' + dataDiInvio.getMinutes() : dataDiInvio.getMinutes()}`;
  const data = `${dataDiInvio.getDate()}/${dataDiInvio.getMonth() + 1}/${dataDiInvio.getFullYear()}`;

  const direct = new DirectCollection({
    username: req.body.username.toLowerCase(),
    messaggio: req.body.messaggio,
    destinatario: req.body.destinatario,
    oraDiInvio: ora,
    dataDiInvio: data,
    destinatarioId: req.body.destinatarioId
  })

  direct.save(direct).then(data => res.send(data));
}

exports.getContattiDirect = async (req, res) => {
  const directForUsername = await DirectCollection.find({ username: req.params.username });

  if (directForUsername !== null) {
    const directs = [];
    directForUsername.forEach(ris => {
      const newDirect = {
        messaggio: ris.messaggio,
        username: ris.username,
        destinatario: ris.destinatario,
        oraDiInvio: ris.oraDiInvio,
        id: ris._id.toString(),
        destinatarioId: ris.destinatarioId
      }
      directs.push(newDirect)
    })
    res.send(directs)
  } else {
    return
  }

}
