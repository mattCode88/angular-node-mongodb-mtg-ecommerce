const express = require('express');
const app = express();
// const session = require('express-session');
// const passport = require('passport');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');

//funzione di connessione al DB
const connectDb = require('./config/db-connection');
const usersApi = require('./api/auth-api');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config({ path: 'server/.env' });
const PORT = process.env.PORT || 8000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//stabilisco l' uso di sessioni
// app.use(session({
//   secret: process.env.CHIAVE_SEGRETA,
//   saveUninitialized: false,
//   resave: false
// }));

// //setto l' uso di funzioni per usare strategie passport
// app.use(passport.initialize());
// app.use(passport.session());

connectDb();

app.use('/api', usersApi);


app.listen(PORT, () => console.log(`Server in ascolto sula porta ${PORT}`));
