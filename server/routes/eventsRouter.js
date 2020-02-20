const express = require('express');
const events = express.Router();

const eventsController = require('../controllers/eventsController');

events.get('/', eventsController.getEvents, eventsController.saveDB, (req, res) => {
  res.status(200).json(res.locals.results);
})

events.post('/retrieve', eventsController.retrieveFromDB, (req, res) => {
  res.status(200).json('it worked');
})
//res.locals.results



// events.post('/retrieve/:location', eventsController.getEvents, eventsController.filterEvents, (req, res) => {
//   res.status(200).json(res.locals.filteredCity);
// })

module.exports = events;