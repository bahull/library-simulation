const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');

// const { domain, clientID, clientSecret } = require("./config").auth0;
// const { STRIPE_SECRET_KEY, CONNECTION_STRING, secret } = require("./config");

require('dotenv').config();

const port = 3001;

const app = express();

// app.use(express.static(`${__dirname}/../build`));
//
// Initialize session for use
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  })
);

//Initialize massive and gain access to db
massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(console.log);

//Body parser and Cors initialization
app.use(json());
app.use(cors());

const logController = require('./controllers/login_controller');
const booksController = require('./controllers/booksController');

app.post('/api/auth/register', logController.register);
app.post('/api/auth/login', logController.login);
app.post('/api/userInfo', (req, res, next) => {
  const { username, userID } = req.body;
  req.session.username = username;
  req.session.userID = userID;
});
app.get('/api/getBooks', booksController.getBooks);
//test
app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
