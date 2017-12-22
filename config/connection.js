// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection = mysql.createConnection({
		port: 3306,
		host: 'us-cdbr-iron-east-05.cleardb.net',
		user: 'b012c44ccb24fc',
		password: '499421a8',
		database: 'heroku_ba8ba00b4e65311'
});




// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;