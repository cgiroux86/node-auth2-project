exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user-info")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user-info").insert([
        { username: "cgiroux", password: "abc123", department: "IT" },
        { username: "test_dumby", password: "test", department: "sales" },
      ]);
    });
};
