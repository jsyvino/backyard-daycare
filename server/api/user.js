var express = require('express');
var router = express.Router();
var { Daycare, DayImg, User, userDaycare} = require('../db/models');
var Promise = require('bluebird');
module.exports = router;

