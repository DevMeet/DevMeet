const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const login = express.Router();

login.post('/', userController.comparePassword, cookieController.setSSIDCookie, (req, res) => {
  res.status(200).json({ id: res.locals.id, auth: res.locals.auth });
});

module.exports = login;
