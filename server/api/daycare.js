var express = require('express');
var router = express.Router();
var { Daycare, DayImg, User, userDaycare} = require('../db/models');
var Promise = require('bluebird');
module.exports = router;

router.get('/', (req, res, next) => {
    Daycare.findAll({
        // include: [{all: true}]
    })
        .then(daycares => {
            console.log(daycares)
            return res.send(daycares)
        })
        .catch(next)
})

router.get('/favorites', (req, res, next) => {
    Daycare.findAll({
        include: [{model: true}],
        where: {

        }
    })
        .then(daycares => {
            console.log(daycares)
            return res.send(daycares)
        })
        .catch(next)
})

