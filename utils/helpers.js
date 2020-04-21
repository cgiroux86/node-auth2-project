const db = require("../knex/dbConfig");

module.exports = {
  find() {
    return db("user-info");
  },
  addUser(user) {
    return db("user-info").insert(user);
  },
};
