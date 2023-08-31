// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

// Database connection settings
const dbConfig = {
  host: 'localhost',
  user: 'lotterybitcoin_user',
  password: '2}*m6?XZ*s6B',
  database: 'lotterybitcoin_mydb',
  port: 3306
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Create Express app
const app = express();

// Disable CORS
app.use(cors());

// Set up body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define endpoint for submitting the form
app.post('/submit', (req, res) => {
  // Extract values from the form
  const { username, email, wallet, txhash } = req.body;

  // Create SQL query to insert data into table
  const sql = "INSERT INTO contact (username, email, wallet, txhash) VALUES (?, ?, ?, ?)";

  // Execute the query with the extracted values
  pool.query(sql, [username, email, wallet, txhash], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err.message);
    } else {
      console.log(`Inserted record with ID ${result.insertId}`);
      res.status(200).send('Data inserted into database');
    }
  });
});
app.get('/test', (req, res) => {
  // Extract values from the form
  const username ="test";
  const email = "test@t.com";
  const wallet = "0x";
  const txhash  = "req.body";
  

  // Create SQL query to insert data into table
  const sql = "INSERT INTO contact (username, email, wallet, txhash) VALUES (?, ?, ?, ?)";

  // Execute the query with the extracted values
  pool.query(sql, [username, email, wallet, txhash], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err.message);
    } else {
      console.log(`Inserted record with ID ${result.insertId}`);
      res.status(200).send('Data inserted into database');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});