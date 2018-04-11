'use strict';

const db = require('../index');
const Daycare = require('./daycare')
const DayImg = require('./dayImg')
const User = require('./user')
const UserDaycare = require('./userDaycare')
const Feedback = require('./feedback')
// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations
DayImg.belongsTo(Daycare, {as: 'dayPics', foreignKey: 'daycareId', constraints: false, allowNull:true, defaultValue:null});
Daycare.hasMany(DayImg, {as: 'dayPics', foreignKey: 'daycareId', constraints: false, allowNull:true, defaultValue:null});
Daycare.belongsTo(DayImg, {as: 'mainPic', constraints: false, allowNull:true, defaultValue:null});
DayImg.hasOne(Daycare, {as: 'mainPic', constraints: false, allowNull:true, defaultValue:null})

User.belongsToMany(Daycare, {through: UserDaycare});
Daycare.belongsToMany(User, {through: UserDaycare});
Daycare.hasMany(UserDaycare);

User.hasMany(Feedback);
Feedback.belongsTo(User);

module.exports = {
	db,
	User,
	Daycare,
	DayImg,
	UserDaycare,
	Feedback
}
