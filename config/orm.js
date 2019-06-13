var connection = require("../config/connection.js");

var orm = {
    selectAll: (tableInput, cb) => {
        console.log(tableInput);
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;