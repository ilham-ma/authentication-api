const db = require("../../../plugins/sqlite");
const jwt = require("../../../plugins/jwt");

const authRegister = (req, res) => {
  const { name, email, password } = req.body;

  db.run(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (error, rows) => {
      if (error) return res.status(400).json({ message: "unauthorized" });
      console.log(rows);
      return res.status(201).json({ message: "success" });
    }
  );
};

const authLogin = (req, res) => {
  const { email, password } = req.body;

  db.get(
    `SELECT name, email FROM users WHERE email = ? AND password = ?`,
    [email, password],
    (error, rows) => {
      console.log(rows);
      if (error) return res.status(400).json({ message: "unauthorized" });

      const token = jwt.sign({ name: rows.name, email: rows.email }, "garam");
      return res.status(200).json({ message: "success", data: { token } });
    }
  );
};

const authCheckToken = (req, res) => {
  let token = req.headers.authorization;

  token = token.split(" ");

  const valid = jwt.verify(token.toString(), "garam");
  return res.status(200).json({ data: valid });
};

module.exports = { authRegister, authLogin, authCheckToken };
