const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const connectDb = require('./config/db-connection');
const usersApi = require('./api/auth-api');
const dashboardApi = require('./api/dashboard-api');
const cardApi = require('./api/card-api');



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

connectDb();

app.use('/api', usersApi);
app.use('/api', dashboardApi);
app.use('/api', cardApi);


app.listen(PORT, () => console.log(`Server in ascolto sula porta ${PORT}`));
