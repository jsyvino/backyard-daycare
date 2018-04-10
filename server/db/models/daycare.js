var Sequelize = require('sequelize');
var db = require('../index')

const randomImg = () => {
    let temp = Math.ceil(Math.random() * 18);
    // /Users/jsyvino/Documents/Fullstack/Checkpoints/senior-enrichment/public/Images/15.jpg
    return `/Images/${temp}.jpg`
}

var Daycare = db.define('daycare', {
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
    contact: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT
    },
    hours: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    priceUnit: {
        type: Sequelize.ENUM,
        valus: ['daily', 'weekly', 'monthly', 'annunaly'],
        allowNull: false,
    },
    style: {
        type: Sequelize.ENUM,
        valus: ['In-Home', 'Daycare Center', 'Nanny'],
        allowNull: false,
    }
})


module.exports = Daycare;
