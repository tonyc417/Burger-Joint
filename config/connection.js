var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers"
});

connection.connect((err) => {
    if (err) {
        console.error("You have encountered an error: " + err);
        return;
    }
    console.log("You have connected.");
});

module.exports = connection;