var Sequelize = require('sequelize');
var db = require('../index')

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    zipcode: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    address: {
        type: Sequelize.VIRTUAL,
        get () {
                return this.getDataValue('street') + ', ' + this.getDataValue('city') + ', ' + this.getDataValue('state') + ', ' + this.getDataValue('zipcode')
        }
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imgUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: `https://robohash.org/${this.name}`
    },
})

module.exports = User;
