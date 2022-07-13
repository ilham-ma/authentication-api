const db = require("../../../plugins/sqlite");

db.run(
  `CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name text,
    email unique,
    password text,
    CONSTRAINT email_unique UNIQUE (email)
)`,
  (err) => {
    if (!err) {
      console.log("table berhasil dibuat");
    } else {
      console.log("table sudah ada");
    }
  }
);

module.exports = db;
