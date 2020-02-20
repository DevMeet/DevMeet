const express = require('express');
const signup = express.Router();
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

signup.post('/', userController.createUser, cookieController.setSSIDCookie, (req, res) => {
  res.status(200).json(res.locals.user._id)
});

module.exports = signup;