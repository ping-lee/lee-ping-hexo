const { pool } = require('./pool')

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res.rows)
    pool.end()
  })