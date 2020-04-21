const jwt = require("jsonwebtoken");
const config = require("../api/jwtConfig");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, config.secret, (error, decrpyted) => {
      if (error) {
        res.status(401).json({ error: "forbidden" });
      } else {
        req.decrypted = decrpyted;
        next();
      }
    });
  } else {
    res.status(400).json({ error: "please provide correct user info" });
  }
};
