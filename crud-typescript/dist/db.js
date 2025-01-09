"use strict";
const { Pool } = require("pg");
const pool = new Pool({
    user: 'postgres',
    host: 'db',
    port: 5432,
    password: 'mypostgres',
    database: 'crud-postgres',
});
pool.connect().then(() => {
    console.log("connected to database code");
})
    .catch((err) => {
    console.error("Database connection error", err);
});
module.exports = pool;
