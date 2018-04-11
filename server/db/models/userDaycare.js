var Sequelize = require('sequelize');
var db = require('../index')

var UserDaycare = db.define('userDaycare', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        validate: {
            min: 0,
            max: 5
        }
    },
    favorite: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userNotes: {
        type: Sequelize.TEXT,
    },
    review: {
        type: Sequelize.TEXT,
    },
})

module.exports = UserDaycare;
