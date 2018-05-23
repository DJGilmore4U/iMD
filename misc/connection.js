// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 's3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'ff2gsiuqt3egdh9h',
		password: 'g2y70uasgeafj5ak',
		database: 'qi5itjhjjgi7m6fg'
	})
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;