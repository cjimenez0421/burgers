var mysql = require("mysql");
connection = mysql.createConnection({
    host: "local host",
    user: "root",
    password: "root",
    database: "burgers_bd"
});
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;