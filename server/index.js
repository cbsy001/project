const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'bilal',  // Use the MySQL user you created
  password: 'bilal',  // Use the MySQL user password you specified
  database: 'sample_db',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate credentials (replace with actual validation logic using the database)
  // For demonstration purposes, using simple hardcoded values
  if (username === 'user' && password === 'pass') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
