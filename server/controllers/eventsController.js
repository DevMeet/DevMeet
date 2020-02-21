const db = require('../models/userModel');
const fetch = require('node-fetch');
const moment = require('moment');

const eventsController = {};

eventsController.getEvents = async (req, res, next) => {
  const urls = [
    'https://www.eventbriteapi.com/v3/events/93399876545/?expand=venue',
    'https://www.eventbriteapi.com/v3/events/79491393899/?expand=venue',
    'https://www.eventbriteapi.com/v3/events/94930643109/?expand=venue'
    // 'https://www.eventbriteapi.com/v3/events/75309640161/?expand=venue',
    // 'https://www.eventbriteapi.com/v3/events/80212544881/?expand=venue',
    // 'https://www.eventbriteapi.com/v3/events/81264788169/?expand=venue',
    // 'https://www.eventbriteapi.com/v3/events/79875823739/?expand=venue',
    // 'https://www.eventbriteapi.com/v3/events/94222001543/?expand=venue',
    // 'https://www.eventbriteapi.com/v3/events/93557156975/?expand=venue'
  ];

  const eventsArr = [];

  await Promise.all(
    urls.map(url =>
      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer CPIOTBKKXSDUDM4MXJBM'
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log('data from fetch: ', data);
          const newDate = moment(data.date).format('MMMM D, Y');
          eventsArr.push({
            name: data.name.text,
            date: newDate,
            description: data.description.text,
            url: data.url,
            eventid: data.id,
            venue: data.venue.name,
            city: data.venue.address.city,
            latitude: data.venue.latitude,
            longitude: data.venue.longitude
          });
        })
        .catch(err => console.log(err))
    )
  );
  res.locals.results = eventsArr;
  next();
};

eventsController.saveDB = (req, res, next) => {
  // console.log('savedDB res.locals: ', res.locals)
  res.locals.results.forEach(event => {
    const { date, name, description, eventid, url, venue, city, longitude, latitude } = event;
    const text = `
    INSERT INTO events (date, name, description, eventid, url, venue, city, longitude, latitude)
    values($1, $2, $3, $4, $5, $6, $7, $8, $9)
`;
    const values = [date, name, description, eventid, url, venue, city, longitude, latitude];
    db.query(text, values)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    next();
  });
};

eventsController.addEvent = (req, res, next) => {
  const { city_name } = req.body;
  const text1 = `
          INSERT INTO location (longitude, latitude, city_name)
          values($1, $2, $3)
      `;
  const values1 = [null, null, city_name];
  db.query(text1, values1)
    .then(response => console.log(response))
    .catch(err => console.log(err));

  const { date, name, description, eventid, url, venue, city } = req.body;
  const text2 = `
          INSERT INTO events (date, name, description, eventid, url, venue, city)
          values($1, $2, $3, $4, $5, $6, $7)
      `;
  const values2 = [date, name, description, eventid, url, venue, city];
  db.query(text2, values2)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  next();
};

eventsController.createEvent = (req, res, next) => {
  // destructuring req.body for user input of events
  const { date, name, description, eventId, url, venue, city, longitude, latitude } = req.body;
  // prefix any user created event with 1000000 to differentiate in queries
  const cryptoId = `1000000${eventId.toString()}`;
  // slicing description to meet field level character length constraints
  const descShort = description
    .split('')
    .slice(0, 238)
    .join('');
  // creating values array for db insertion
  const newEvent = [date, name, descShort, cryptoId, url, venue, city, longitude, latitude];
  // query string with parameters for newEvent values
  const dbEntry = `
  INSERT INTO events (date, name, description, eventid, url, venue, city, longitude, latitude)
  values($1, $2, $3, $4, $5, $6, $7, $8, $9)
  `;

  db.query(dbEntry, newEvent)
    .then(response => {
      res.locals.response = response;
    })
    .catch(err => console.log(err));
  next();
};

eventsController.retrieveFromDB = async (req, res, next) => {
  const text = `
          SELECT * 
          FROM events
      `;
  await db
    .query(text)
    .then(response => {
      const eventsArr = [];
      response.rows.forEach(event => {
        if (event.city === req.body.selectedLocation) {
          eventsArr.push(event);
        }
      });
      res.locals.events = eventsArr;
      // console.log('this is res.events:', res.locals.events)
    })
    .catch(err => console.log(err));
  return next();
};
module.exports = eventsController;
