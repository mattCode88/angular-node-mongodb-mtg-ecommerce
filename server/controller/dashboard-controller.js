const UserCollection = require('../model/User');
const bcrypt = require('bcrypt');

exports.getInfoUser = async (req, res) => {

  const shearchedUser = await UserCollection.findOne({ username: req.params.username });

  if (shearchedUser === null) res.status(404).send('Utente non trovato');

  res.send(shearchedUser);

}
