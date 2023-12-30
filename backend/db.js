const pg = require("pg");

const db = new pg.Client("storypaint.cl4suqmog0uc.us-east-2.rds.amazonaws.com");

db.connect();

module.exports = db;
