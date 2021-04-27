const mysql = require("mysql2");

// Configure DB Connection parameters
const config = {
  host: process.env.HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.USER || "root",
  password: process.env.PASS || "root",
  database: process.env.DB_NAME || "employee_tracker_db",
};

const db = mysql.createConnection(config);

module.exports = db;
