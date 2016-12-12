var orm = require("./config/orm.js");


orm.addParty("White Santa", "Drunk Party", 1000, 2);
// Find all the pets ordering by the lowest price to the highest price.
orm.selectAndOrder("*", "holidayparty", "party_cost", "ASC");

// Find a pet in the pets table by an animal_name of Rachel.
orm.selectWhere("holidayparty", "party_name", "Top Gun");

// Find the buyer with the most pets.
orm.findWhoHasMost("client_name", "client_id", "clients", "holidayparty");

// Console log all the party_name's.
orm.select("*", "holidayparty");

// Console log all the client_name's.
orm.select("client_name", "clients");

// Console log all the parties that have a party-type of grown-up.
orm.selectWhere("holidayparty", "party_type", "grown-up");

// Console log all the clients and their parties.
orm.leftJoin("*", "clients", "holidayparty", "id", "client_id");
