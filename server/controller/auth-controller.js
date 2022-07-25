const UserCollection = require('../model/User');
const bcrypt = require('bcrypt');
const MyValidator = require('../validators/my-validator');

exports.registerUser = async (req, res) => {

  if (
    req.body.username.length < 3 ||
    req.body.password.length < 8 ||
    req.body.nome.length < 3 ||
    req.body.cognome.length < 3 ||
    req.body.citta.length < 3 ||
    req.body.nazione === '' ||
    req.body.via === '' ||
    MyValidator.validaEmail(req.body.email) ||
    MyValidator.validaPassword(req.body.password) ||
    MyValidator.validaCap(req.body.cap) ||
    MyValidator.validaNCivico(req.body.nCivico) ||
    MyValidator.validaTelefono(req.body.telefono)
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

  const duplicateUserTelefono= await UserCollection.findOne({ telefono: req.body.telefono });

  if (duplicateUserTelefono !== null) {
    const error = {
      status: true,
      message: 'Telefono già registrato'
    }
    return res.send(error)
  }

  const data = new Date();
  const dataFormattata = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new UserCollection({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    telefono: req.body.telefono,
    nome: req.body.nome.toLowerCase(),
    cognome: req.body.cognome.toLowerCase(),
    via: req.body.via.toLowerCase(),
    nCivico: req.body.nCivico,
    cap: req.body.cap,
    citta: req.body.citta.toLowerCase(),
    nazione: req.body.nazione.toLowerCase(),
    dataIscrizione: dataFormattata,
    isLogged: false,
  });

  user.save(user).then(data => res.send(data));

}

exports.loginUser = async (req, res) => {

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

exports.modificaUser = async (req, res) => {

  if (
    req.body[0].username.length < 3 ||
    req.body[0].password.length < 8 ||
    req.body[0].nome.length < 3 ||
    req.body[0].cognome.length < 3 ||
    req.body[0].citta.length < 3 ||
    req.body[0].nazione === '' ||
    req.body[0].via === '' ||
    MyValidator.validaEmail(req.body[0].email) ||
    MyValidator.validaPassword(req.body[0].password) ||
    MyValidator.validaCap(req.body[0].cap) ||
    MyValidator.validaNCivico(req.body[0].nCivico) ||
    MyValidator.validaTelefono(req.body[0].telefono)
  ) {
    const error = {
      status: true,
      message: 'Campi non validi'
    }
    return res.send(error)
  }

  const duplicateUser = await UserCollection.findOne({ username: req.body[0].username });

  if (duplicateUser !== null && duplicateUser._id.toString() !== req.body[1]) {
    const error = {
      status: true,
      message: 'Username già registrato'
    }
    return res.send(error)
  }

  const duplicateUserEmail = await UserCollection.findOne({ email: req.body[0].email });

  if (duplicateUserEmail !== null && duplicateUserEmail._id.toString() !== req.body[1]) {
    const error = {
      status: true,
      message: 'Email già registrata'
    }
    return res.send(error)
  }

  const duplicateUserTelefono = await UserCollection.findOne({ telefono: req.body[0].telefono });

  if (duplicateUserTelefono !== null && duplicateUserTelefono._id.toString() !== req.body[1]) {
    const error = {
      status: true,
      message: 'Telefono già registrato'
    }
    return res.send(error)
  }

  const hashedPassword = bcrypt.hashSync(req.body[0].password, 10);

  req.body[0].password = hashedPassword;

  UserCollection.findByIdAndUpdate(req.body[1], req.body[0], { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(400).send({ message: `La carta con id: ${req.body.id} non è stata trovata!` })
        } else {
          const error = {
            status: false,
            message: 'Account Modificato.'
          }
          return res.send(error)
        }
    }).catch(err => {
        res.status(500).send({ message: "Errore nell' aggiornamento delle informazioni!" })
    });

}

exports.logoutUser = async (req, res) => {
  await UserCollection.updateOne({ username: req.params.username }, { isLogged: false })
  res.send(true)
}
