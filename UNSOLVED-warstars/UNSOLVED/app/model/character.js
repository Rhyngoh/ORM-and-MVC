var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var Starwars = sequelize.define("allcharacters", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	routeName: {
		type: Sequelize.STRING
	},
	name: {
		type: Sequelize.STRING
	},
	role: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.INTEGER
	},
	forcePoints: {
		type: Sequelize.INTEGER
	}
},{
		timestamps: false
	});
	
	Starwars.sync();
	module.exports = Starwars;