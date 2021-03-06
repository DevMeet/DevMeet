const express = require('express');
const signup = express.Router();
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

signup.post(
  '/',
  userController.storeLocation,
  userController.encrypt,
  userController.createUser,
  (req, res) => {
    console.log(res.locals.authenticated);
    // res.status(200).json(res.locals.user._id)
    res.status(200).redirect('/');
  }
);

module.exports = signup;
