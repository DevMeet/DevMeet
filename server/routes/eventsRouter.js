const express = require('express');
const events = express.Router();

const eventsController = require('../controllers/eventsController');

events.get('/', eventsController.getEvents, eventsController.saveDB, (req, res) => {
  res.status(200).json(res.locals.results);
})

events.post('/retrieve', eventsController.retrieveFromDB, (req, res) => {
  // console.log('in retrieve middlewear: ', req.locals.events)
  res.status(200).json({events: res.locals.events});
})
//res.locals.results



// events.post('/retrieve/:location', eventsController.getEvents, eventsController.filterEvents, (req, res) => {
//   res.status(200).json(res.locals.filteredCity);
// })

module.exports = events;