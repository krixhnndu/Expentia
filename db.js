const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "Scott",  // Your MySQL username
  password: "tiger", // Your MySQL password
  database: "ExpenseTracker", // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database!");
});

module.exports = db;
