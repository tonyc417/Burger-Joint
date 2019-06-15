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
    insert: (table, vals, cb) => {
        var queryString = 'INSERT INTO ' + table + '(burger_name) VALUES (' + vals + ';' + '))' ;
        console.log("Insert one input: " + queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    updateOne: (table, cb) => {
        var queryString = 'UPDATE ' + table + 'SET devoured = true WHERE id = ';
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) throw err;
        })
    }

}

module.exports = orm;