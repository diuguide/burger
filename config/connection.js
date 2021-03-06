// Set up MySQL connection.
const mysql = require("mysql");

var connection = mysql.createConnection(process.env.NODE_ENV === "production" ? process.env.JAWSDB_URL : {
  "user": "root",
  "password": "new_password",
  "database": "burgers_db",
  "host": "localhost",
  "port": 3306,
});


// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.

module.exports = connection;