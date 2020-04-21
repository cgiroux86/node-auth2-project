const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Utils = require("../utils/helpers");
const jwt = require("jsonwebtoken");
const authConfig = require("../api/jwtConfig");
const authenticator = require("../utils/authenticator");

router.get("/", (req, res) => {
  Utils.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({ error: err }));
});

router.post("/register", (req, res) => {
  const { username, password, department } = req.body;
  const rounds = Number(process.env.ROUNDS) || 14;
  const hashed = bcrypt.hashSync(password, rounds);
  const user = { username, password: hashed, department };

  Utils.addUser(user)
    .then((u) => res.status(201).json(u))
    .catch((err) => res.status(500).json({ error: err }));
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Utils.find("user-info")
    .where({ username: req.body.username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res
          .status(200)
          .json({ message: `Welcome back, ${user.username}`, token });
      } else {
        res.status(401).json("forbidden");
      }
    })
    .catch((err) => console.log(err));
});

router.get("/users", authenticator, (req, res) => {
  Utils.find("user-info")
    .where({ department: req.decrypted.department })
    .then((users) => res.status(200).json({ data: users }))
    .catch((err) => res.status(500).json({ error: err }));
});

function generateToken(payload) {
  return jwt.sign(payload, authConfig.secret, { expiresIn: "30m" });
}
module.exports = router;
