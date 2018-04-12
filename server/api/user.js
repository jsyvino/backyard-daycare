var express = require('express');
var router = express.Router();
var { Daycare, DayImg, User, UserDaycare } = require('../db/models');
var Promise = require('bluebird');
module.exports = router;


router.get('/', (req, res, next) => {
    User.findAll({
        // include: [{all: true}]
    })
        .then(users => {
            return res.send(users)
        })
        .catch(next)
})

router.get('/:userId', (req, res, next) => {
    User.findById(req.params.userId)
        .then(user => {
            return res.send(user)
        })
        .catch(next)
})

router.get('/:userId/favorites', (req, res, next) => {
    User.findById(req.params.userId, {
        include: [{
            model: Daycare,
            through: {
                model: UserDaycare,
                where: {
                    userId: req.params.userId,
                    favorite: true
                }
            },
            include:[{model: DayImg, as: 'dayPics'}]
        }]
    })
        .then(user => {
            res.send(user.daycares)
        })
        .catch(next)
})

router.put('/:userId/favorites/:daycareId', (req, res, next) => {
    UserDaycare.findOrCreate({
        where: {
            userId: req.params.userId,
            daycareId: req.params.daycareId
        }
    })
    .spread((instance, created) => {
        instance.update({
            favorite: !instance.favorite
        }).then(updated => {
            res.send(updated)
        })
        .catch(next)
    })
    .catch(next)
})
