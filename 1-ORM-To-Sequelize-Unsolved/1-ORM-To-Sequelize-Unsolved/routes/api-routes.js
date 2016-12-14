// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
var Todo = require("../models/todo.js");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    Todo.getTodos(function(results) {
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    Todo.addTodo(req.body, function(results) {
      res.json(results).status(200);
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    Todo.deleteTodo(req.params.id, function(results) {
      res.json(results).status(200);
    });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
    Todo.editTodo(req.body, function(results) {
      res.json(results).status(200);
    });
  });
};
