const db = require('../models/userModel');
const fetch = require("node-fetch");
const moment = require('moment');

const eventsController = {};

eventsController.getEvents = async (req, res, next) => {
  const urls = ['https://www.eventbriteapi.com/v3/events/93399876545/?expand=venue', 
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

  await Promise.all(urls.map(url =>
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer CPIOTBKKXSDUDM4MXJBM'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      // console.log('data from fetch: ', data)
      const newDate = moment(data.date).format('MMMM D, Y')
      eventsArr.push({
        name: data.name.text,
        date: newDate,
        description: data.description.text,
        url: data.url,
        eventid: data.id,
        venue: data.venue.name,
        city: data.venue.address.city,
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
  // console.log('savedDB res.locals: ', res.locals)
  res.locals.results.forEach(event => {
    const { date, name, description, eventid, url, venue, city } = event;
    const text = `
    INSERT INTO events (date, name, description, eventid, url, venue, city)
    values($1, $2, $3, $4, $5, $6, $7)
`
    const values = [date, name, description, eventid, url, venue, city];
    db.query(text, values)
        .then(response => console.log(response))
        .catch(err => console.log(err))
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

  const { date, name, description, eventid, url, venue, city } = req.body;
  const text2 = `
          INSERT INTO events (date, name, description, eventid, url, venue, city)
          values($1, $2, $3, $4, $5, $6, $7)
      `
  const values2 = [date, name, description, eventid, url, venue, city];
  db.query(text2, values2)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  next();
}

eventsController.retrieveFromDB = (req, res, next) => {
  
  const text = `
          SELECT date, name, description, url, venue, city
          FROM events
          WHERE city=$1
      `
  const values = [city];
  db.query(text, values)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  next();
}

eventsController.filterEvents = (req, res, next) => {
  if(req.body.selectedLocation === 'LA') {
    res.locals.results.forEach((events) => {
      let newEvents = [];
      if (events.city === 'Los Angeles') {
        newEvents.push(events);
        res.locals.losangeles = newEvents;
      }
    })
  }
}

module.exports = eventsController;