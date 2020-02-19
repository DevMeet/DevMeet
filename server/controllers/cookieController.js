const db = require('../models/userModel');

const cookieController = {}

cookieController.setSSIDCookie = (req, res, next) => {
    const { username } = req.body;
    res.cookie('ssid', username[0]._id, {httpOnly: false});
    res.locals.userId = username[0]._id;
    next();
}

module.exports = cookieController;