var express = require('express');
var router = express.Router();
var { Daycare, DayImg, User, UserDaycare} = require('../db/models');
var Promise = require('bluebird');
module.exports = router;

router.get('/', (req, res, next) => {
    Daycare.findAll({
        include: [{model: DayImg, as: 'dayPics'}, {
            model: UserDaycare,
        }]
    })
        .then(daycares => {
            return res.send(daycares)
        })
        .catch(next)
})

router.get('/:daycareId', (req, res, next) => {
    Daycare.findById(req.params.daycareId, {
        include: [{model: DayImg, as: 'dayPics'}, {
            model: UserDaycare,
        }]
    })
        .then(daycare => {
            return res.send(daycare)
        })
        .catch(next)
})

