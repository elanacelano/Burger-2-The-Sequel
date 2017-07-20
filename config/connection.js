// Set up sequelize connection.
var sequelize = require("sequelize");

var connection = sequelize.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Command#3",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;