'use strict';

const db = require('../index');
const Daycare = require('./daycare')
const DayImg = require('./dayImg')
const User = require('./user')
const UserDaycare = require('./userDaycare')
// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations
DayImg.belongsTo(Daycare);
Daycare.hasMany(DayImg);
Daycare.belongsTo(DayImg, {as: 'mainPic'});
DayImg.hasOne(Daycare, {as: 'mainPic'})

User.belongsToMany(Daycare, {through: UserDaycare});
Daycare.belongsToMany(User, {through: UserDaycare});

module.exports = {
	db,
	User,
	Daycare,
	DayImg,
	UserDaycare
}