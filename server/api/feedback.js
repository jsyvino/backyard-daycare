var express = require('express');
var router = express.Router();
var { Daycare, DayImg, User, UserDaycare, Feedback} = require('../db/models');
var Promise = require('bluebird');
module.exports = router;

router.get('/', (req, res, next) => {
    Feedback.findAll({
        include: [User]
    })
        .then(feedback => {
            return res.send(feedback)
        })
        .catch(next)
})

router.get('/:feedbackId', (req, res, next) => {
    Feedback.findById(req.params.feedbackId, {
        include: [User]
    })
        .then(feedback => {
            return res.send(feedback)
        })
        .catch(next)
})

