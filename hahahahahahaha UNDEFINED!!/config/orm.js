var connection = require("../config/connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, callbk) {
    var queryString = "SELECT * FROM " + tableInput + " WHERE " + colToSearch + " = ?";

    connection.query(queryString, [valOfCol], function(err, result) {
      //console.log(result);
      callbk(result);
    });
  }
};

module.exports = orm;
