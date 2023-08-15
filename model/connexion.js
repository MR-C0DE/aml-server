import mysql from 'mysql2';

const config = {
  user: 'root',
  password: 'root',
  host: 'localhost',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  database: 'aml_db',
  multipleStatements: true
};


const connection = mysql.createConnection(config);

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

export {
  connection
}