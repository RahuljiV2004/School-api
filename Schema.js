const connection = require('./db');  // your connection file

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    email VARCHAR(100)
  );
`;

connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created or already exists!');
  }
});
