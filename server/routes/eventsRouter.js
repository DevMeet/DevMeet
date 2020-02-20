const express = require('express');
const events = express.Router();

const eventsController = require('../controllers/eventsController');

events.get('/', eventsController.getEvents, eventsController.saveDB, (req, res) => {
  res.status(200).json(res.locals.results);
});

events.get('/retrieve', eventsController.retrieveFromDB, (req, res) => {
  res.status(200).json(res.locals.results);
});

events.post('/newEvent', eventsController.createEvent, (req, res) => {
  console.log(res.locals.results);
  res.status(200).json(res.locals.results);
});

module.exports = events;
