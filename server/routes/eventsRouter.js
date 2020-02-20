const express = require('express');
const events = express.Router();

const eventsController = require('../controllers/eventsController');

events.get('/', eventsController.getEvents, (req, res) => {
  // res.status(200).json({date: res.locals.results.start.local,
  //                       name: res.locals.results.name.text,
  //                       description: res.locals.results.description.text,
  //                       url: res.locals.results.url,
  //                       longitude: res.locals.results.venue.address.longitude,
  //                       latitude: res.locals.results.venue.address.latitude
  // });
  res.status(200).json(res.locals.results);
})

module.exports = events;