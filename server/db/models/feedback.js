var Sequelize = require('sequelize');
var db = require('../index')

var Feedback = db.define('feedback', {
    subject: {
        type: Sequelize.STRING,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false

    },
    category: {
        type: Sequelize.ENUM,
        values: ['Question', 'Addition'],
        allowNull: false,
        defaultValue: 'Question'
    },
})

module.exports = Feedback;
