const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require ('config');
const passport = require ("passport");
const db = config.get('mongoURI');
const mongoose = require('mongoose');

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

app.use(passport.initialize());
require("./passport")
require("./passportGoogle")

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/google', require('./routes/auth'))

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});