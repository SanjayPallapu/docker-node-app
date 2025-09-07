const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Connect to MySQL using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: 'root',
  password: process.env.DB_PASS
});

connection.connect(err => {
  if (err) {
    console.error('DB Connection Error:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js Web App!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

