"use strict";

var _require = require("pg"),
  Pool = _require.Pool;
var pool = new Pool({
  user: 'postgres',
  host: 'db',
  port: 5432,
  password: 'mypostgres',
  database: 'crud-postgres'
});
pool.connect().then(function () {
  console.log("connected to database code");
})["catch"](function (err) {
  console.error("Database connection error", err);
});
module.exports = pool;