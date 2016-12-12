var orm = require("./config/orm.js");

orm.selectWhere("holidayparty", "party_type", "grown-up", function(res){
	var data = res;
	console.log(data);
});