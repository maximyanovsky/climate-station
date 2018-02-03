const { Client } = require('pg')
const client = new Client({
    host: "192.168.1.102",
    user: "pi",
    password: "12345",
    database: "data",
});

client.connect()

client.query('SELECT * FROM climat limit 10;', (err, res) => {
  console.log(err ? err.stack : res) // Hello World!
  client.end()
})