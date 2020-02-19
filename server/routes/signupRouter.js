const express = require('express');
const signup = express.Router();
const path = require('path');

signup.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../src/signup.html'));
});

signup.post('/', userModelController.createUser, (req, res) => {
    res.status(200).redirect('/');
})

module.exports = signup;