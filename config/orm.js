var connection = require("../config/connection.js");

var orm = {
    selectAll: (tableInput, cb) => {
        console.log("Table input: " + tableInput);
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insert: (table, cols, vals, cb) => {
        var queryString = `INSERT INTO ` + table + ` (burger_name, devoured)` ;
        console.log("Insert one input: " + queryString);
        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        });

    }

}

module.exports = orm;