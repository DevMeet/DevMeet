const db = require('../models/userModel');
const fetch = require("node-fetch");

const eventsController = {};

eventsController.getEvents = async (req, res, next) => {
  const url = 'https://www.eventbriteapi.com/v3/events/93399876545/';
  await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer CPIOTBKKXSDUDM4MXJBM'
    },
  })
      .then(response => response.json())
      .then(data => {
        console.log('getEvents: ', data)
        res.locals.results = data;
        console.log('res.locals.results: ', res.locals.results)
      })
      .catch(err => console.log(err));
  next();
}

eventsController.addEvent = (req, res, next) => {
  const { city_name } = req.body;
  const text1 = `
          INSERT INTO location (longitude, latitude, city_name)
          values($1, $2, $3)
      `
  const values1 = [null, null, city_name];
  db.query(text1, values1)
      .then(response => console.log(response))
      .catch(err => console.log(err))

  const { date, description, url, phone_num } = req.body;
  const text2 = `
          INSERT INTO events (date, description, url, phone_num, location_id)
          values($1, $2, $3, $4, $5)
      `
  const values2 = [date, description, url, phone_num, location_id];
  db.query(text2, values2)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  next();
}

module.exports = eventsController;