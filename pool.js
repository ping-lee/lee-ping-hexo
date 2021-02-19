const { Pool } = require('pg')

const connectionString = 
`postgresql://zabbix:Liping614@146.56.197.70:5432/zabbix`

const pool = new Pool({
    connectionString: connectionString,
    ssl: false
})

module.exports = { pool }
