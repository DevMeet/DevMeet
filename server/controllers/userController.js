const db = require('../models/userModel');
const fetch = require("node-fetch");

const userModelController = {};

// when a new user signs up
userModelController.createUser = (req, res, next) => {
    const { email, username, password, first_name, last_name, role } = req.body;
    console.log('req.body: ', req.body);
    const text = `
            INSERT INTO users (email, username, password, first_name, last_name, role, location_id)
            values($1, $2, $3, $4, $5, $6, $7)
        `
    const values = [email, username, password, first_name, last_name, role, null];
    db.query(text, values)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    next();
}

// Login verification
userModelController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  console.log('req.body: ', req.body);
  const text = `
          SELECT username
          FROM users
          WHERE username = $1 AND password = $2
  `
  const values = [username, password];
  db.query(text, values)
      .then(response => {
              if (response.rows[0]) {
                  console.log('User ', response.rows[0].username, ' has been verified through SQL DB');
                  next();
              // if user doesn't exist or username/password is incorrect
              } else {
                  console.log('Username or password is invalid.');
                  res.send('Invalid username or password. Please sign up or try again.');
              }
          })
      .catch(err => console.log(err))
}

// fetch events from Eventbrite
userModelController.events = async (req, res, next) => {
  const url = 'https://www.eventbriteapi.com/v3/events/93399876545/';
  await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer CPIOTBKKXSDUDM4MXJBM'
    },
  })
      .then(response => response.json())
      .then(data => {
          res.locals.results = data.results;
      })
      .catch(err => console.log(err));
  next();
}