// Dependencies
// =============================================================

// Pull in Sequelize package
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var Book = sequelize.define("book", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	title: {
		type: Sequelize.STRING
	},
	author: {
		type: Sequelize.STRING
	},
	genre: {
		type: Sequelize.STRING
	},
	pages: {
		type: Sequelize.INTEGER
	}
},{
	timestamps: false
});
// Reference our connection to the database
	Book.sync();
	module.exports = Book;

// Create a "Book" model


// Sync with DB


// Export the Book Model

