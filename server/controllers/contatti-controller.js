const ContattiCollection = require('../models/Contatti')
const MyValidator = require('../validators/my-validator');

// exports.getUserForUsername = async (req, res) => {

// }

exports.createContatto = async (req, res) => {

  if (req.body.nome.lenth < 3 || req.body.cognome.length < 3) {
    const error = {
      status: true,
      message: 'Nome e Cognome devono avere almeno 3 caratteri.'
    }
    return res.send(error)
  }

  const contattoRipetuto = await ContattiCollection.findOne({ nome: req.body.nome.toLowerCase() });

  if (contattoRipetuto !== null) {
    const error = {
      status: true,
      message: 'Nome contatto già presente in rubrica.'
    }
    return res.send(error)
  }

  const telefonoRipetuto = await ContattiCollection.findOne({ telefono: req.body.telefono });

  if (telefonoRipetuto !== null) {
    const error = {
      status: true,
      message: 'Numero di telefono già presente in rubrica.'
    }
    return res.send(error)
  }

  if (MyValidator.validaTelefono(req.body.telefono)) {
    const error = {
      status: true,
      message: 'Numero di telefono non valido.'
    }
    return res.send(error)
  }

  if (req.body.email && MyValidator.validaEmail(req.body.email)) {
    const error = {
      status: true,
      message: 'Email non valida.'
    }
    return res.send(error)
  }

  const contatto = new ContattiCollection({
    nome: req.body.nome.toLowerCase(),
    cognome: req.body.cognome.toLowerCase(),
    telefono: req.body.telefono,
    indirizzo: req.body.indirizzo.toLowerCase(),
    email: req.body.email.toLowerCase(),
    dataDiNascita: req.body.dataDiNascita,
    riferimentoUser: req.body.riferimentoUser
  })

  contatto.save(contatto).then(data => res.send(data))

}
