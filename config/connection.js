var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

connection.connect((err) => {
    if (err) {
        console.error("You have encountered an error: " + err);
        return;
    }
    console.log("You have connected.");
});

module.exports = connection;