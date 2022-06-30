const ContattiCollection = require('../models/Contatti');
const MyValidator = require('../validators/my-validator');

exports.createContatto = async (req, res) => {

  if (req.body.email === '' || req.body.telefono === '') {
    const error = {
      status: true,
      message: 'Email e Telefono sono obbligatori.'
    }
    return res.send(error)
  }

  if (req.body.nome.lenth < 3 || req.body.cognome.length < 3) {
    const error = {
      status: true,
      message: 'Nome e Cognome devono avere almeno 3 caratteri.'
    }
    return res.send(error)
  }

  const contattiForUsername = await ContattiCollection.find({ riferimentoUser: req.body.riferimentoUser });

  const findTelefono = contattiForUsername.find(contatto => contatto.telefono === req.body.telefono);

   if (findTelefono !== undefined) {
    const error = {
      status: true,
      message: 'Telefono già registrato.'
    }
    return res.send(error)
  }

  const findEmail = contattiForUsername.find(contatto => contatto.email === req.body.email);

  if (findEmail !== undefined) {
    const error = {
      status: true,
      message: 'Email già registrata.'
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

exports.getContattiForUser = async (req, res) => {

  const contattoPerRiferimento = await ContattiCollection.find({ riferimentoUser: req.params.username });
  res.send(contattoPerRiferimento)

}

exports.deleteContatto = async (req, res) => {

  ContattiCollection.findByIdAndDelete(req.params.id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Il contatto con id: ${req.params.id} non è stata trovato!`})
            }else{
              res.send(true)
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Errore nell' aggiornamento delle informazioni!"
            });
        });
}

exports.updateContatto = async (req, res) => {

  if (req.body[0].email === '' || req.body[0].telefono === '') {
    const error = {
      status: true,
      message: 'Email e Telefono sono obbligatori.'
    }
    return res.send(error)
  }

  if (req.body[0].nome.lenth < 3 || req.body[0].cognome.length < 3) {
    const error = {
      status: true,
      message: 'Nome e Cognome devono avere almeno 3 caratteri.'
    }
    return res.send(error)
  }

  const contattiForUsername = await ContattiCollection.find({ riferimentoUser: req.body[0].riferimentoUser });

  const findTelefono = contattiForUsername.find(contatto => contatto.telefono === req.body[0].telefono);

  if (findTelefono !== undefined) {
    if (findTelefono._id.toString() !== req.body[1]) {
      const error = {
        status: true,
        message: 'Telefono già registrato.'
      }
      return res.send(error)
    }
  }

  const findEmail = contattiForUsername.find(contatto => contatto.email === req.body[0].email);

  if (findEmail !== undefined) {
    if (findEmail._id.toString() !== req.body[1]) {
      const error = {
        status: true,
        message: 'Email già registrata.'
      }
      return res.send(error)
    }
  }

  if (MyValidator.validaTelefono(req.body[0].telefono)) {
    const error = {
      status: true,
      message: 'Numero di telefono non valido.'
    }
    return res.send(error)
  }

  if (MyValidator.validaEmail(req.body[0].email)) {
    const error = {
      status: true,
      message: 'Email non valida.'
    }
    return res.send(error)
  }

  ContattiCollection.findByIdAndUpdate(req.body[1], req.body[0], { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(400).send({ message: `La carta con id: ${req.body.id} non è stata trovata!` })
            } else {
                res.send(true);
            }
        }).catch(err => {
            res.status(500).send({ message: "Errore nell' aggiornamento delle informazioni!" })
        });

}
