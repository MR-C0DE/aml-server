import mysql from 'mysql2';

const config = {
  host: 'frwahxxknm9kwy6c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'iudm3bbfn5ppoikf',
  password: 'fshw1e999frqyv0a',
  database: 'b4jsnb2mhq17shf2',
  port: 3306
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