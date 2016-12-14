// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");
// Require our Book model


// Routes
// =============================================================
module.exports = function(app) {

  // Get all books route
app.get("/all", function(req, res){
	Book.findAll({}).then(function(results){
		res.json(results);
	});
});
//where: ["title LIKE ?", "%" + req.params.specific + "%"]
  // Get a specific book route
app.get("/api/:specific", function(req, res){
	Book.findOne({where: {routeName: req.params.specific}}).then(function(results){
		res.json(results);
	});
});

  // Get all books of a specific genre
app.get("/api/:genre", function(req, res){
	Book.findAll({where: {genre: req.params.genre}}).then(function(result){
		res.json(result);
	});
});

  // Get all books from a specific author
app.get("/api/:author", function(req, res){
	Book.findAll({where: {author: req.params.author}}).then(function(results){
		res.json(results);
	});
});

  // Get all "long" books (books 300 pages or more)
app.get("/api/:pages", function(req, res){
	Book.findAll({where: {pages: {$gt: 300}}}).then(function(results){
		res.json(results);
	});
});


  // Get all "short" books (books 150 pages or less)
app.get("/api/:pages", function(req, res){
	Book.findAll({where: {pages: {$lt: 150}}}).then(function(results){
		res.json(results);
	});
});

  // Add a book
app.post("/api/new", function(req, res){
	var books = req.body;
	Book.create({
		title: books.title,
		author: books.author,
		genre: books.genre,
		pages: books.pages
	});
});

  // Delete a book


};
