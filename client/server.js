const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const fs = require("fs");
const data = fs.readFileSync("./database.json");

const conf = JSON.parse(data);
console.log(conf);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();


app.get('/api/customer', (req, res) => {
  let sql = 'SELECT * FROM customer';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});

module.exports = app;