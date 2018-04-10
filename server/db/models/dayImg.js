var Sequelize = require('sequelize');
var db = require('../index')

const randomImg = () => {
    let temp = Math.ceil(Math.random() * 30);
    // /Users/jsyvino/Documents/Fullstack/Checkpoints/senior-enrichment/public/Images/15.jpg
    return `/Images/${temp}.jpeg`
}

var DayImg = db.define('dayImg', {
    imgUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: function image () {
            return randomImg()
        }
    }
})

module.exports = DayImg;
