const db = require('../models/userModel');
const fetch = require("node-fetch");
const moment = require('moment');

const eventsController = {};

eventsController.getEvents = async (req, res, next) => {
  const urls = ['https://www.eventbriteapi.com/v3/events/93399876545/?expand=venue', 
  'https://www.eventbriteapi.com/v3/events/93373206775/?expand=venue',
  'https://www.eventbriteapi.com/v3/events/79875823739/?expand=venue'
  ];
  
  const eventsArr = [];

  await Promise.all(urls.map(url =>
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer CPIOTBKKXSDUDM4MXJBM'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      const newDate = moment(data.date).format('MMMM D, Y')
      eventsArr.push({
        name: data.name.text,
        date: newDate,
        description: data.description.text,
        url: data.url,
        venue: data.venue.name,
        latitude: data.venue.latitude,
        longitude: data.venue.longitude,
      });
     })
    .catch(err => console.log(err))
  ))
  res.locals.results = eventsArr;
  next();
}

eventsController.saveDB = (req, res, next) => {
  console.log('savedDB res.locals: ', res.locals)
  res.locals.results.forEach(event => {
    const { date, name, description, url, venue } = event;
    const text = `
    INSERT INTO events (date, name, description, url, venue)
    values($1, $2, $3, $4, $5)
`
    const values = [date, name, description, url, venue];
    db.query(text, values)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    console.log('made it')
    next();
  })
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