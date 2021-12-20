const Pool = require('pg').Pool

// Allows me to query into the db 
// connected

const Pool = require('pg').Pool;
// Create queries to make use of the pool
// but how ? 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'library',
  password: 'test',
  port: 5432,
});