var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  select: function(whatToSelect, tableInput) {
    var queryString = "SELECT " + whatToSelect + " FROM " + tableInput;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM " + tableInput + " WHERE " + colToSearch + " = ?";
    connection.query(queryString, [valOfCol], function(err, result) {
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol, orderBy) {
    var queryString = "SELECT " + whatToSelect + " FROM " + table + " ORDER BY " + orderCol + " " + orderBy;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString = "SELECT " + tableOneCol + ", COUNT(" + tableOneCol + ") AS count FROM " +
    tableOne + " LEFT JOIN " + tableTwo + " ON " + tableTwo + "." + tableTwoForeignKey +
    "= " + tableOne + ".id GROUP BY " + tableOneCol + " ORDER BY count DESC LIMIT 1";

    connection.query(queryString, function(err, result) {
      console.log(result);
    });
  },
  addParty: function(inputName,inputType, inputCost,clientID){
    var queryString = "INSERT INTO holidayparty(party_name, party_type, party_cost, client_id) VALUES(?, ?, ?, ?)";
    connection.query(queryString, [inputName, inputType, inputCost, clientID], function(err, result){
      console.log(result);
    });
  },
  leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString = "SELECT " + whatToSelect + " FROM " + tableOne + " AS tOne";
    queryString = queryString + " LEFT JOIN " + tableTwo + " AS tTwo";
    queryString = queryString + " ON tOne." + onTableOneCol + " = tTwo." + onTableTwoCol;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
